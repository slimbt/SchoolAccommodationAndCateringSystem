import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from '../_services/storage.service'
import { AuthService } from '../_services/auth.service';
import { EventBusService } from '../_shared/event-bus.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  eventBusSub?: Subscription;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
  
        // Redirection vers la page d'accueil
        window.location.href = 'http://localhost:4200/';
  
        // Si vous préférez utiliser la méthode navigate de Router :
        // this.router.navigate(['/']);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  
}