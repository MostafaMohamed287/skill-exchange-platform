import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  private authService = inject(Auth);

  name = '';
  email = '';
  password = '';

  register() {
    const data = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.authService.register(data).subscribe({
      next: (response) => {
        console.log('Register successful:', response);
      },
      error: (error) => {
        console.log('Register failed:', error);
      }
    });
  }
}