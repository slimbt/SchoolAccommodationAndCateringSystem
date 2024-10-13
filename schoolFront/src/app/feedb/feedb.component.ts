import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'app/_services/feedback.service';
import { ParentService } from 'app/_services/parent.service';

@Component({
  selector: 'feedb',
  templateUrl: './feedb.component.html',
  styleUrls: ['./feedb.component.css']
})
export class FeedbComponent implements OnInit {

  parentInfo: any = {};
  feedbacks: any = [];
  parents: any = [];
responsiveOptions: any;

  constructor(private fService: FeedbackService, private pService: ParentService) { }

  ngOnInit(): void {
    this.loadParentInfo(); // Charger les informations du parent connecté
    this.getAllParents(); // Charger tous les parents
    this.getAllFeedbacks(); // Charger tous les feedbacks (sans filtrage par idParent)
  }

  loadParentInfo() {
    const authUser = sessionStorage.getItem('auth-user');
    if (authUser) {
      const user = JSON.parse(authUser);
      const parentId = user.id;

      this.pService.getParentById(parentId).subscribe(
        (data) => {
          this.parentInfo = data;
          console.log('Parent Information:', this.parentInfo);
        },
        (error) => {
          console.error('Failed to fetch parent information:', error);
        }
      );
    } else {
      console.log('No user information found in session storage.');
    }
  }

  getAllParents() {
    this.pService.getAllParent().subscribe(
      (response: any[]) => {
        this.parents = response;
        console.log('All Parents:', response);
      },
      (error) => {
        console.error('Failed to fetch all parents:', error);
      }
    );
  }

  getAllFeedbacks() {
    this.fService.getAllFeedback().subscribe(
      (response: any[]) => {
        this.feedbacks = response;
        console.log('All Feedbacks:', response);
      },
      (error) => {
        console.error('Failed to fetch all feedbacks:', error);
      }
    );
  }

  getParentFullName(idParent: any): string {
    const parent = this.parents.find((p: any) => p.id === idParent);
    if (parent) {
      return `${parent.prenom} ${parent.nom}`;
    }
    return '';
  }
  getParentPhoto(idParent: any): string {
    const parent = this.parents.find((p: any) => p.id === idParent);
    if (parent) {
      return `${parent.photoPath}`;
    }
    return '';
  }
  getParentPhotoUrl(idParent: any): string {
    const photo = this.getParentPhoto(idParent);
    return photo ? `assets/assets/images/${photo}` : 'assets/assets/images/pdp.jpg';
}
deleteF(id: any) {
  this.fService.deleteFeedback(id).subscribe(
    (response) => {
      console.log("service", response)
      this.getAllFeedbacks()
    }
  )
}

confirmDelete(id: any) {
  if (confirm("Êtes-vous sûr de vouloir supprimer cette hebergement ?")) {
    this.deleteF(id);
  }
}
publish(feedbackId: any) {
  // Trouver le feedback correspondant dans la liste des feedbacks
  const feedbackIndex = this.feedbacks.findIndex((feedback: any) => feedback.id === feedbackId);

  if (feedbackIndex !== -1) {
    // Mettre à jour le statut du feedback à "Publié"
    this.feedbacks[feedbackIndex].status = "Publié";

    // Appeler le service pour mettre à jour le feedback dans la base de données
    this.fService.updateFeedback(this.feedbacks[feedbackIndex]).subscribe(
      (response) => {
        console.log("Feedback publié avec succès :", response);
      },
      (error) => {
        console.error("Erreur lors de la publication du feedback :", error);
      }
    );
  }
}

  generateStarRating(rating: number): string {
    let starsHtml = '';

    // Générer les étoiles pleines
    for (let i = 0; i < Math.floor(rating); i++) {
      starsHtml += '<i class="pi pi-star" style="color: gold;"></i>';
    }

    // Générer une demi-étoile si nécessaire
    if (rating % 1 !== 0) {
      starsHtml += '<i class="pi pi-star-half" style="color: gold;"></i>';
    }

    // Générer les étoiles vides pour compléter jusqu'à 5 étoiles
    for (let i = Math.ceil(rating); i < 5; i++) {
      starsHtml += '<i class="pi pi-star-o"></i>';
    }

    return starsHtml;
  }
}