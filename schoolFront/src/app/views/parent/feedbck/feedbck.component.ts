import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'app/_services/feedback.service';
import { ParentService } from 'app/_services/parent.service';

@Component({
  selector: 'app-feedbck',
  templateUrl: './feedbck.component.html',
  styleUrls: ['./feedbck.component.css']
})
export class FeedbckComponent implements OnInit {
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
        // Filtrer les feedbacks avec statut "publié"
        this.feedbacks = response.filter(feedback => feedback.status === 'Publié');
        console.log('Published Feedbacks:', this.feedbacks);
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
      return `${parent.photoPath} `;
    }
    return '';
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