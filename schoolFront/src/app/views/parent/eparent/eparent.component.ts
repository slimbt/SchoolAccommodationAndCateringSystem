import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ParentService } from 'app/_services/parent.service';
import { ImageService } from 'app/_services/image.service';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { WebsocketService } from 'app/_services/web-socket.service';
import { NotificationService } from 'app/_services/notification.service';
import { ReponseService } from 'app/_services/reponse.service';

declare var bootstrap: any;

@Component({
  selector: 'app-eparent',
  templateUrl: './eparent.component.html',
  styleUrls: ['./eparent.component.css'],
  template: `
  <div *ngIf="notification">
    {{ notification }}
  </div>
`,
styles: []
})

export class EparentComponent implements OnInit, AfterViewInit {
  parentInfo: any = {};
  modificationApplied = false;
  images: any[] = [];
  showDescription: boolean = false;
  showModal = false;
  activeStepIndex = 0;
  steps: any[] = [];
  parentIdd:any
  notificationMessage: string | null = null;
  evenements: any[] = [
    { date: '2024-09-06', titre: 'Rentrée scolaire', description: 'Début de la nouvelle année scolaire' },
    { date: '2024-12-25', titre: 'Vacances de Noël', description: 'Vacances d\'hiver' },
    { date: '2025-01-06', titre: 'Vacances de printemps', description: 'Une pause au printemps' },
    { date: '2024-01-14', titre: 'Fête du révolion', description: 'Fête du révolion' },
    { date: '2024-06-8', titre: 'Examens finaux', description: 'Période d\'examens à la fin de l\'année.' },
    { date: '2024-09-25', titre: 'Jours fériés nationaux ', description: 'Les jours fériés nationaux ' },
    { date: '2024-09-30', titre: 'Journée sportive ', description: 'Une journée dédiée aux activités sportives' },
    { date: '2024-10-05', titre: 'Cérémonie de remise des diplômes', description: ' Célébration des élèves diplômés à la fin de l\'année.' },
  ];
  notification: string;
  receivedMessages: string[] = [];
  notifs : any = [] ;
  reps : any = [] ;
  constructor(private eService: ParentService, private imageService: ImageService,private router:Router,private websocketService: WebsocketService,private snackBar: MatSnackBar,private notificationservice:NotificationService,private reponseService:ReponseService) {}

  ngOnInit(): void {

    this.websocketService.getMessageSubject().subscribe((message: string) => {
      this.receivedMessages.push(message);
     
      this.showMessage(message);
    });
  
    const authUser = sessionStorage.getItem('auth-user');
    if (authUser) {
      const user = JSON.parse(authUser);
      const parentId = user.id;
      console.log('Parent ID:', parentId);

      this.eService.getParentById(parentId).subscribe(
        (data) => {
          this.parentInfo = data;
          this.parentIdd=this.parentInfo.id;
          this.getAllNotification(this.parentIdd);
          this.getAllReponses(this.parentIdd);
          console.log('Parent InformationNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN:', this.parentInfo, this.parentIdd);




          // Maintenant que parentIdd est initialisé, connectez-vous au WebSocket
          //this.webSocketService.connect(this.parentIdd).subscribe(
           // (message) => {
              // Afficher la notification avec un snackbar
            //  this.notificationMessage = message.body;
              //this.snackBar.open(this.notificationMessage, 'Fermer', {
               // duration: 5000,
               // horizontalPosition: 'center',
                //verticalPosition: 'bottom',
             // });
          //  },
            //(error) => {
             // console.error('Erreur lors de la réception des notifications WebSocket : ', error);
            //}
          //);
        },
        (error) => {
          console.error('Failed to fetch parent information:', error);
        }
      );
    } else {
      console.log('No user information found in session storage.');
    }
  
    this.loadImages();
   
  }


  ngAfterViewInit(): void {
   
  }
  getAllNotification(idParent) {
    this.notificationservice.getNotificationByIdParent(idParent).subscribe(
      (response: any) => {
        this.notifs = response;
        console.log("data for get all notiiifa", response);
        console.log(this.notifs);
  
      }   
    );
  }
  getAllReponses(idParent) {
    this.reponseService.getAllReponses(idParent).subscribe(
      (response: any) => {
        this.reps = response;
        console.log("data for get all reponset", response);
        console.log(this.notifs);
  
      }   
    );
  }
 
 
  showMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 10000,
      verticalPosition: 'top', // Positionner la notification en haut
      
      horizontalPosition: 'center' // Centrer horizontalement
    });
  }
  /*subscribeToNotifications(parentId: any): void {
    this.webSocketService.connect(parentId).subscribe(
      (message) => {
        console.log('Notification received:', message);
        this.notificationMessage = message;
      },
      (error) => {
        console.error('Erreur lors de la réception des notifications WebSocket : ', error);
      }
    );
  }*/
  



  saveChanges(): void {
    this.eService.updateParent(this.parentInfo).subscribe(
      (data) => {
        console.log('Parent information updated successfully:', data);
        this.modificationApplied = true;
      },
      (error) => {
        console.error('Failed to update parent information:', error);
      }
    );
  }

  loadImages(): void {
    this.imageService.getImages().subscribe(data => {
      data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      const latestImages = data.slice(0, 3);
      this.images = latestImages.map(item => ({
        title: item.title,
        description: item.description,
        createdAt: item.createdAt,
        itemImageSrc: 'assets/actualités/' + item.itemImageSrc,
        thumbnailImageSrc: 'assets/actualités/' + item.thumbnailImageSrc
      }));
    });
  }

  

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  nextStep() {
    if (this.activeStepIndex < this.steps.length - 1) {
      this.activeStepIndex++;
    }
  }

  prevStep() {
    if (this.activeStepIndex > 0) {
      this.activeStepIndex--;
    }
  }
  openMesDemandes() {
    // Naviguer vers la route de Mesdemandes
    this.router.navigate(['/demande']);
  }
  openHistorique() {
    // Naviguer vers la route de Mesdemandes
    this.router.navigate(['/historique']);
  }


  resetNotifications() {
    this.notifs = []; // Reset notifs to an empty array
  }
}
