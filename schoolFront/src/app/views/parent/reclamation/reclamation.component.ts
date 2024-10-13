import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreService } from 'app/_services/cre.service';
import { HebergementService } from 'app/_services/hebergement.service';
import { ParentService } from 'app/_services/parent.service';
import { ReclamationService } from 'app/_services/reclamation.service';
declare var $: any;
@Component({
  selector: 'reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  nomExpediteur: string = '';
  prenomExpediteur: string = '';
  telephone: string = '';
  cre: any = '';
  libelle:any='';
  objet: string = '';
  message: string = '';
  parentInfo: any = {};
  idParent:any;
   
  creList: any[] = [];
  libelleList: any[] = [];
  hebergementId: any;
  data:any;
  constructor(private eService:ReclamationService, private pService:ParentService,private creService:CreService,private dService:HebergementService) { }

  @ViewChild('reclamationForm') reclamationForm!: NgForm;
  ngOnInit(): void {
   this.getAllDemandeHebergement();
    const authUser = sessionStorage.getItem('auth-user');
    if (authUser) {
      const user = JSON.parse(authUser);
      const parentId = user.id;
      console.log('Parent ID:', parentId);

      this.pService.getParentById(parentId).subscribe(
        (data) => {
          this.parentInfo = data;
          console.log('Parent Information:succee');

         
        },
        (error) => {
          console.error('Failed to fetch parent information:', error);
        }
      );
    } else {
      console.log('No user information found in session storage.');
    }
  }
getAllCre(){




}
  submitReclamation() {
    const reclamationData = {
      nomExpediteur: this.parentInfo.nom,
      prenomExpediteur: this.parentInfo.prenom,
      telephone: this.telephone,
      cre: this.cre,
      libelle: this.libelle,
      objet: this.objet,
      message: this.message,
      idParent:this.parentInfo.id
    };

    this.eService.addReclamations(reclamationData)
      .subscribe(
        response => {
          console.log('Réclamation ajoutée avec succès : ', response);
          // Réinitialiser les valeurs des champs après la soumission réussie du formulaire
          this.nomExpediteur = '';
          this.prenomExpediteur = '';
          this.telephone = '';
          this.cre = '';
          this.libelle = '';
          this.objet = '';
          this.message = '';
          $('#reclamationSentModal').modal('show');
          this.reclamationForm.resetForm();
        },
        error => {
          console.error('Erreur lors de l\'ajout de la réclamation : ', error);
          // Gérer l'erreur, par exemple, afficher un message d'erreur à l'utilisateur
        }
      );
  }

  getAllDemandeHebergement() {
    this.dService.getAllDemandehebergement().subscribe(
      (data: any[]) => {
        console.log("rrr",data)
        // Récupérer les CRE
        this.creList = data.map(item => item.cre);
        // Supprimer les doublons
        this.creList = this.creList.filter((value, index, self) => self.indexOf(value) === index);
        this.data=data
      },
      (error) => {
        console.error('Erreur lors de la récupération des CRE :', error);
      }
    );
  }

  onCreChange() {
    // Filtrer les libellés en fonction de la CRE sélectionnée dans creList
    this.libelleList = this.data.filter(item => item.cre === this.cre).map(item => item.libelle);
    console.log("test", this.libelleList);
  }
  
}
