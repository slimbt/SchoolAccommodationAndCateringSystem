import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EleveService } from 'app/_services/eleve.service';
import { ImageService } from 'app/_services/image.service';
import { ParentService } from 'app/_services/parent.service';

@Component({
  selector: 'ajout-enfant',
  templateUrl: './ajout-enfant.component.html',
  styleUrls: ['./ajout-enfant.component.css']
})
export class AjoutEnfantComponent implements OnInit {
  @ViewChild('ajoutEleveForm') ajoutEleveForm: NgForm;

  ajoutReussi: boolean = false;
  parentInfo: any;

  nom: string='';
  prenom: string = ''; 
  ecole: string = ''; 
  niveau: string = ''; 
  datenaissance: Date;sexeInput: any;
 ; 
  sexe: string = ''; 
  adresse: string = ''; 
  
  images: any[] = [];
showDescription: boolean = false;

  constructor(private router: Router, private eleveService: EleveService,private pService:ParentService,private imageService: ImageService) { }

  ngOnInit(): void {
    this.loadImages();
    const authUser = sessionStorage.getItem('auth-user');
    if (authUser) {
      const user = JSON.parse(authUser);
      const parentId = user.id;
      console.log('Parent ID:', parentId);
  
      this.pService.getParentById(parentId).subscribe(
        (data) => {
          this.parentInfo = data;
          
          console.log('Parent Information:');
        },
        (error) => {
          console.error('Failed to fetch parent information:', error);
        }
      );
    } else {
      console.log('No user information found in session storage.');
    }
  }


  

  navigateToParent(): void {
    this.router.navigate(['/parent']);
  }

  addEleve(): void {


console.log( this.parentInfo);

const formattedDateOfBirth = this.formatDateOfBirth();

    const newEleve = {
      nom: this.nom,
      prenom:this.prenom,
      ecole: this.ecole,
      niveau: this.niveau,
      datenaissance: formattedDateOfBirth,
      sexe: this.sexe,
      adresse: this.adresse,
      idParent:this.parentInfo.id
    };

    this.eleveService.addEleve(newEleve).subscribe(
      (response) => {
        console.log('Élève ajouté avec succès : ', response);
        this.ajoutReussi = true;
        console.log(newEleve)
     
        this.resetForm();
        
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'élève : ', error);
      }
    );
  }

  // Fonction pour réinitialiser les champs du formulaire après l'ajout
  private resetForm(): void {
    this.nom = '';
    this.prenom = '';
    this.ecole = '';
    this.niveau = '';
    this.datenaissance = null;
    this.sexe = '';
    this.adresse = '';

    // Réinitialiser le formulaire
    this.ajoutEleveForm.resetForm();

    // Marquer tous les champs comme non touchés pour masquer les messages de validation
    Object.keys(this.ajoutEleveForm.controls).forEach((controlName) => {
      this.ajoutEleveForm.controls[controlName].markAsUntouched();
    });
  }

  formatDateOfBirth(): string {
    return formatDate(this.datenaissance, 'dd.MM.yy', 'en-US'); // Changer 'en-US' en 'fr-FR' si vous utilisez le français
  }

  loadImages(): void {
    this.imageService.getImages().subscribe(data => {
      // Trier les images par date de création (du plus récent au plus ancien)
      data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      // Sélectionner les trois dernières images
      const latestImages = data.slice(0, 3);

      // Convertir les données et les assigner à la variable images
      this.images = latestImages.map(item => {
        return {
          title: item.title,
          description: item.description,
          createdAt: item.createdAt,
          itemImageSrc: 'assets/actualités/' + item.itemImageSrc,
          thumbnailImageSrc: 'assets/actualités/' + item.thumbnailImageSrc
        };
      });
    });
  }
}