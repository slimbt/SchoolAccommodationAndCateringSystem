import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTransferService } from 'app/_services/data-transfert-service.service';
import { EleveService } from 'app/_services/eleve.service';
import { HebergementParentService } from 'app/_services/hebergement-parent.service';
import { HebergementService } from 'app/_services/hebergement.service';
import { ParentService } from 'app/_services/parent.service';

@Component({
  selector: 'confirmform1',
  templateUrl: './confirmform1.component.html',
  styleUrls: ['./confirmform1.component.css']
})
export class Confirmform1Component implements OnInit {
  parentInfo: any = {};
  hebergementData: any;
  selectedEleveId: any;
  selectedEleve: any = {}; // Objet pour stocker les détails de l'élève
  eleves : any = [] ;
  hebergements: any[];
  visible = false;
  demandes : any = [] ;
data:any
selectedEleveNom: string = ''; // Déclaration des propriétés
selectedElevePrenom: string = '';
hebergementId: any; 

libelle: string = '';
  cre: string = '';

  typeChambre: string;
 
  creList: any[] = [];
  libelleList: any[] = [];
  modificationApplied: boolean = false;

 


  constructor(private route: ActivatedRoute,private  router:Router, private eService: EleveService, private yService:HebergementParentService,private pService:ParentService,private dService:HebergementService) { }




  
  ngOnInit(): void {
    
    this.getAllDemandeHebergement();
  
    this.getAllHebergement();
    this.route.queryParams.subscribe(params => {
      this.hebergementData = JSON.parse(params['hebergementData']);
     
    
    });
    this.route.queryParams.subscribe(params => {
      const hebergementData = JSON.parse(params['hebergementData']);
      console.log('Données de l\'hébergement :', hebergementData);


      this.selectedEleve = this.hebergementData.selectedEleve;
     


      
  
      this.selectedEleveId = hebergementData.selectedEleveId;
      console.log("this.selectedEleveId",this.selectedEleveId)
      if (this.selectedEleveId) {
        // Appeler le service pour récupérer les informations de l'élève
        this.eService.getEleveById(this.selectedEleveId).subscribe(
          (eleve: any) => {
            this.selectedEleve = eleve;
            console.log('Détails de l\'élève sélectionné :', this.selectedEleve);
          },
          (error) => {
            console.error('Erreur lors de la récupération des informations de l\'élève :', error);
          }
        );
      }
    });

    




    const selectedEleveNom = this.hebergementData.selectedEleveNom;
      const selectedElevePrenom = this.hebergementData.selectedElevePrenom;
  
      // Ensuite, vous pouvez utiliser ces informations comme nécessaire
      console.log('Nom de l\'élève sélectionné :', selectedEleveNom);
      console.log('Prénom de l\'élève sélectionné :', selectedElevePrenom);
  
    const authUser = sessionStorage.getItem('auth-user');
    if (authUser) {
      const user = JSON.parse(authUser);
      const parentId = user.id;
      console.log('Parent ID:', parentId);

      this.pService.getParentById(parentId).subscribe(
        (data) => {
          this.parentInfo = data;
          console.log('Parent Information:succee',this.parentInfo.id);
          this.getAllEleve(this.parentInfo.id);
        },
        (error) => {
          console.error('Failed to fetch parent information:', error);
        }
      );
    } else {
      console.log('No user information found in session storage.');
    }
    
  }
  getAllEleve(idParent) {
    this.eService.getAllEleve(idParent).subscribe(
      (response: any) => {
        this.eleves = response;
        console.log("data for get all eleves", response);
        console.log(this.eleves);
  
      }   
    );
  }
  getEleveDetails() {
    this.eService.getEleveById(this.selectedEleve.Id).subscribe(
      (eleve: any) => {
        this.selectedEleve = eleve;
        console.log("ahawa el farkh",this.selectedEleve )
      },
      (error) => {
        console.error("Erreur lors de la récupération des détails de l'élève par ID", error);
      }
    );
  }
  getAllHebergement(){
  this.yService.getAllHebergement().subscribe(
    (data) => {
      this.hebergements = data;
      console.log(this.hebergements);
    },
    (error) => {
      console.error('Erreur lors de la récupération des hébergements :', error);
    }
  );
}

selectEleve(eleve: any) {
  this.selectedEleve = eleve;
}

showDialog() {
  this.visible = true;
}

hideDialog() {
  this.visible = false;
}
sendFormData(): void {
  this.hebergementData.idParent = this.parentInfo.id; // Ajouter l'ID du parent à l'objet d'hébergement
  this.hebergementData.idEleve=  this.selectedEleveId ;
  this.yService.addHebergement(this.hebergementData).subscribe(
    (response) => {
      console.log("haaw l'hebeg kemlaa chof ",this.hebergementData)
      this.modificationApplied = true;
      this.router.navigate(['/pagesucce']);
    },
    (error) => {
      console.error('Erreur lors de l\'ajout de l\'hébergement :', error);
    }
  );
}

onTypeChambreChange(value: string) {
  this.typeChambre = value;
  console.log('Type de chambre sélectionné :', this.typeChambre);
}
saveChanges() {
  // Mettre à jour les données dans hebergementData avec les nouvelles valeurs sélectionnées
  this.hebergementData.selectedEleveNom = this.selectedEleve.nom;
  this.hebergementData.selectedElevePrenom = this.selectedEleve.prenom;
  this.hebergementData.cre = this.cre;
  this.hebergementData.libelle = this.libelle;
  this.hebergementData.typeChambre=this.typeChambre;
  // Autres mises à jour nécessaires...
  this.modificationApplied = true;
  // Fermer le dialogue après enregistrement
  this.visible = false;
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