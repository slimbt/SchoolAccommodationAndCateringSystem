import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/_services/auth.service';
import { StorageService } from 'app/_services/storage.service';

@Component({
  selector: 'app-login-p',
  templateUrl: './login-p.component.html',
  styleUrls: ['./login-p.component.css']
})
export class LoginPComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.redirectBasedOnRole(this.roles);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  redirectBasedOnRole(roles: string[]): void {
    if (roles.includes('ROLE_ADMIN')) {
      this.router.navigate(['/admin/dashboard']);
    } else if (roles.includes('ROLE_MODERATOR')) {
      this.router.navigate(['/contact']);
    } else {
      this.router.navigate(['/portfolio']);
    }
  }
}
