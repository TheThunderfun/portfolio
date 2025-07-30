import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Skill {
  name: string;
  icon?: string | null; // opcional o puede ser null
  level: number;
}
interface SkillGroup {
  category: string;
  items: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills: SkillGroup[] = [
    {
      category: 'Frontend',
      items: [
        { name: 'Angular', icon: 'angular', level: 3 },
        { name: 'TypeScript', icon: 'typescript', level: 4 },
        { name: 'JavaScript', icon: 'javascript', level: 2 },
        { name: 'HTML5', icon: 'html5', level: 4 },
        { name: 'SCSS', icon: 'css', level: 4 },
        { name: 'Bootstrap', icon: 'bootstrap', level: 3 },
      ],
    },
    {
      category: 'Backend / DB',
      items: [
        { name: 'Firebase', icon: 'firebase', level: 4 },
        { name: 'Supabase', icon: 'supabase', level: 4 },
        { name: 'C#', icon: 'c', level: 3 },
        { name: 'SQL', icon: 'mysql', level: 4 },
        { name: 'PHP', icon: 'php', level: 2 },
      ],
    },
    {
      category: 'Herramientas',
      items: [
        { name: 'Git', icon: 'git', level: 4 },
        { name: 'Postman', icon: 'postman', level: 3 },
      ],
    },
    {
      category: 'Otros Lenguajes',
      items: [{ name: 'C', icon: 'c', level: 2 }],
    },
    {
      category: 'En Proceso',
      items: [
        { name: 'Salesforce', icon: 'salesforce', level: 1 },
        { name: 'Python', icon: 'python', level: 1 },
      ],
    },
    {
      category: 'Habilidades Blandas',
      items: [
        { name: 'Comunicación efectiva', icon: null, level: 5 },
        { name: 'Trabajo en equipo', icon: null, level: 5 },
        { name: 'Resolución de problemas', icon: null, level: 4 },
        { name: 'Adaptabilidad', icon: null, level: 4 },
      ],
    },
  ];

  mainSkills = this.skills.filter((s) =>
    ['Frontend', 'Backend / DB', 'Herramientas'].includes(s.category)
  );

  otherSkills = this.skills.filter((s) =>
    ['Otros Lenguajes', 'En Proceso', 'Habilidades Blandas'].includes(
      s.category
    )
  );

  levelLabels: { [key: number]: string } = {
    1: 'Inicial',
    2: 'Básico',
    3: 'Intermedio',
    4: 'Avanzado',
    5: 'Experto',
  };

  getLevelLabel(level: number): string {
    return this.levelLabels[level] || 'N/A';
  }
  getProgressWidth(level: number): string {
    return `${(level / 5) * 100}%`;
  }
}
