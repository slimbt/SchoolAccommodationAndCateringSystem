import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'app/_services/notification.service';

@Component({
  selector: 'app-notifs',
  template: `
  <div *ngIf="notification" class="notifs">
    {{ notification }}
  </div>
`,
  styleUrls: ['./notifs.component.css']
})
export class NotifsComponent implements OnInit {
  notification: string | null = null;
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  
  }
}