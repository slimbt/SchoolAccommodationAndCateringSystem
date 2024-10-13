import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'app/_services/feedback.service';
import { ParentService } from 'app/_services/parent.service';

@Component({
  selector: 'pagesucce',
  templateUrl: './pagesucce.component.html',
  styleUrls: ['./pagesucce.component.css']
})
export class PagesucceComponent implements OnInit {
  parentInfo: any = {};
rating: number;
  feedback: string;
  feedbacks : any = [] ;
  parentId: any;
  feedbackSubmitted: boolean = false;
idParent: any;
  constructor(private fService:FeedbackService,private pService:ParentService) { this.rating = 0; 
  this.feedback = ''; this.idParent=this.idParent}

  ngOnInit(): void {const authUser = sessionStorage.getItem('auth-user');
  if (authUser) {
    const user = JSON.parse(authUser);
    const parentId = user.id;
    console.log('Parent ID:', parentId);

    this.pService.getParentById(parentId).subscribe(
      (data) => {
        this.parentInfo = data;
        this.idParent =this.parentInfo.id;
        console.log('Parent Information:succee',data);
        console.log('Parent Information:succee',this.idParent);
      },
      (error) => {
        console.error('Failed to fetch parent information:', error);
      }
    );
  } else {
    console.log('No user information found in session storage.');
  }
  }



  getAllFeedback(){
    this.fService.getAllFeedback().subscribe(
      (response: any) => {
        this.feedbacks = response;
        console.log("data for get all feedbacks", response);
        console.log(this.feedbacks);
  
      }   
    );
  }


  

  submitFeedback() {
    if (this.rating !== undefined && this.feedback.trim() !== '') {
      const newFeedback = {
        rating: this.rating,
        feedback: this.feedback,
        idParent :this.idParent
      };

      this.fService.addFeedback(newFeedback).subscribe(
        () => {
          // Succès : Le feedback a été ajouté avec succès
          console.log('Feedback ajouté avec succès');
          console.log(newFeedback)
          this.feedbackSubmitted = true; 
          // Réinitialiser les champs après soumission réussie
          this.rating = undefined;
          this.feedback = '';
        },
        (error) => {
        
          console.error('Erreur lors de l\'ajout du feedback :', error);
        }
      );
    } else {
      // Validation échouée : Afficher un message d'erreur ou prendre une action appropriée
      console.error('Veuillez saisir un rating et un feedback valides.');
    }
  }
}