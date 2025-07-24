import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  serviceId = 'service_tzhdpkp';

  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  ngOnInit(): void {
    // Inicializa EmailJS con tu User ID
    emailjs.init('343aUQBeZa87IPCDE'); // Reemplaza con tu User ID de EmailJS
  }

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';
      try {
        const response = await emailjs.send(
          'service_tzhdpkp',
          'template_2vwyvgj',
          {
            name: this.contactForm.value.name,
            email: this.contactForm.value.email,
            message: this.contactForm.value.message,
          },
          '343aUQBeZa87IPCDE'
        );

        console.log('Correo enviado:', response);
        this.submitMessage =
          '¡Mensaje enviado con éxito! Te contactaré pronto.';
        this.submitSuccess = true;
        this.contactForm.reset();
      } catch (error) {
        console.error('Error al enviar el correo:', error);
        this.submitMessage =
          'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.';
        this.submitSuccess = false;
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
