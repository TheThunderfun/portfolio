import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
interface Particula {
  x: number;
  y: number;
  radio: number;
  opacidad: number;
  opDir: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    SkillsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  ngAfterViewInit() {
    const canvas = document.getElementById('rayosCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function rayo(x: number, y: number) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      for (let i = 0; i < 10; i++) {
        x += (Math.random() - 0.5) * 40;
        y += 20;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(255,255,255,${Math.random()})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    const particulas: Particula[] = [];

    for (let i = 0; i < 30; i++) {
      particulas.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radio: Math.random() * 2 + 1,
        opacidad: 0,
        opDir: 0.01 + Math.random() * 0.02,
      });
    }

    function dibujarParticulas() {
      for (const p of particulas) {
        p.opacidad += p.opDir;
        if (p.opacidad >= 1 || p.opacidad <= 0) p.opDir = -p.opDir;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radio, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacidad.toFixed(2)})`;
        ctx.shadowColor = 'white';
        ctx.shadowBlur = 5;
        ctx.fill();
      }
    }

    function animar() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (Math.random() < 0.05) {
        rayo(Math.random() * canvas.width, 0);
      }
      dibujarParticulas();
      requestAnimationFrame(animar);
    }

    animar();
  }
}
