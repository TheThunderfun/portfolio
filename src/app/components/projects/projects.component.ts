import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  code: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Clinica Curita',
      description:
        'Aplicación para gestión de turnos médicos. Incluye autenticación de usuarios, perfiles personalizados, carga de historias clínicas y encuestas de atención.',
      imageUrl: 'assets/clinica.png',
      link: 'https://tpclinica-1845c.web.app/',
      code: 'https://github.com/TheThunderfun/tpClinica',
    },
    {
      title: 'ThunderGames',
      description:
        'Sala de juegos con autenticación, ranking de puntajes y encuestas. Incluye Mayor o Menor, Ahorcado,Preguntados, y Tiro al blanco.',
      imageUrl: '/assets/salaDeJuegos.png',
      link: 'https://saladejuegos-45c22.web.app/home',
      code: 'https://github.com/TheThunderfun/salaDeJuegos',
    },
    {
      title: 'Francesca',
      description:
        'Landing page para una fábrica de pastas. Diseño responsivo con catálogo de productos, contacto y redes sociales.',
      imageUrl: 'assets/logo.png',
      link: 'https://thethunderfun.github.io/Francesca/',
      code: 'https://github.com/TheThunderfun/Francesca',
    },
    {
      title: 'La comanda',
      description:
        'Sistema backend desarrollado en PHP y MySQL que simula la operación de un restaurante. Permite gestionar el menú, registrar pedidos, manejar usuarios y roles, todo a través de endpoints estructurados y seguros.',
      imageUrl: 'assets/php.png',
      link: '',
      code: 'https://github.com/TheThunderfun/Comandita',
    },
  ];

  currentIndex = 0;
  projectsPerPage = 3;
  isFading = false;

  get visibleProjects(): Project[] {
    return this.projects.slice(
      this.currentIndex,
      this.currentIndex + this.projectsPerPage
    );
  }

  next(): void {
    if (this.currentIndex + this.projectsPerPage < this.projects.length) {
      this.fadeAndChangeIndex(this.currentIndex + this.projectsPerPage);
    }
  }

  prev(): void {
    if (this.currentIndex - this.projectsPerPage >= 0) {
      this.fadeAndChangeIndex(this.currentIndex - this.projectsPerPage);
    }
  }

  private fadeAndChangeIndex(newIndex: number): void {
    this.isFading = true;

    setTimeout(() => {
      this.currentIndex = newIndex;
      this.isFading = false;
    }, 500); // el mismo tiempo que la transición CSS
  }
}
