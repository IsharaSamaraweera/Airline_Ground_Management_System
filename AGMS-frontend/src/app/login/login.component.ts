import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  /*login(): void {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        // Handle successful login response
        console.log('Login successful:', response);
        // Implement logic to navigate to another page or update UI
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Handle login error
        console.error('Login error:', error);
        // Implement logic to display error message or take appropriate action
      }
    );
  }*/
}