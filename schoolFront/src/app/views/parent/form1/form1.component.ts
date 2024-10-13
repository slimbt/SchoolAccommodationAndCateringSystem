import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EleveService } from 'app/_services/eleve.service';
import { HebergementParentService } from 'app/_services/hebergement-parent.service';
import { HebergementService } from 'app/_services/hebergement.service';
import { ParentService } from 'app/_services/parent.service';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle'; // Importe Bootstrap
import * as $ from 'jquery'; // Importe jQuery

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  @ViewChild('myCarousel') carouselElement: ElementRef;



parentInfo: any = {}; // Initialiser parentInfo avec un objet vide
datedebut: string;
datefin: string;
eleves : any = [] ;
Eleve: any = {};
selectedEleve: any;
selectedType: string = ''; // Propriété pour stocker le type sélectionné
demandes : any = [] ;
data:any



libelle: string = '';
  cre: string = '';

  typeChambre: string;
 
  creList: any[] = [];
  libelleList: any[] = [];
  hebergementId: any;


  constructor(private pService: ParentService, private eService: EleveService, private route: ActivatedRoute,private yservice:HebergementParentService, private  router:Router,private dService:HebergementService) { }
  ngAfterViewInit() {
    // Initialisation du carrousel après que le composant ait été rendu
    $(() => {
      const carousel = new bootstrap.Carousel(this.carouselElement.nativeElement, {
        interval: 3000 // Intervalle de transition en millisecondes (par exemple, 3000 pour 3 secondes)
      });
    });
   
  }
  ngOnInit(): void {
   
    this.route.queryParams.subscribe(params => {
      this.datedebut = params['datedebut'];
      this.datefin = params['datefin'];
    });
    
  
    const authUser = sessionStorage.getItem('auth-user');
    if (authUser) {
      const user = JSON.parse(authUser);
      const parentId = user.id;
    
      console.log('Parent ID:', parentId);

      this.pService.getParentById(parentId).subscribe(
        (data) => {
          this.parentInfo = data;
          console.log('Parent Information:succee');
          this.getAllEleve(this.parentInfo.id);
        },
        (error) => {
          console.error('Failed to fetch parent information:', error);
        }
      );
    } else {
      console.log('No user information found in session storage.');
    }
    
    console.log("voici les creee w liebelee",  this.getAllDemandeHebergement())
    

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
  getEleveById(id: any) {
    this.eService.getEleveById(id).subscribe(
      (eleve: any) => {
        this.Eleve = eleve;
      },
      (error) => {
        console.error("Error fetching eleve by ID", error);
      }
    );
  }
  onSelect(eleve: any) {
    this.selectedEleve = eleve;

  }

  
  onTypeChambreChange(value: string) {
    this.typeChambre = value;
    console.log('Type de chambre sélectionné :', this.typeChambre);
  }
  onSubmit() {
    if (!this.selectedEleve || !this.selectedEleve.nom || !this.selectedEleve.prenom) {
      console.error('Erreur: Élève non sélectionné ou nom/prénom non défini.');
      return;
    }
  
    // Créer un nouvel objet hébergement avec les données du formulaire
    const newHebergement = {
     
      nom: this.parentInfo.nom,
      prenom: this.parentInfo.prenom,
      datedebut: this.datedebut,
      datefin: this.datefin,
      selectedEleveNom: this.selectedEleve.nom,
      selectedElevePrenom: this.selectedEleve.prenom,
      cre: this.cre,
      libelle: this.libelle,
      typeChambre: this.typeChambre,
      selectedEleveId:this.selectedEleve.id
      // Ajouter d'autres propriétés si nécessaire
    };
  
    // Rediriger vers le composant confirmform1 avec les données d'hébergement
    this.router.navigate(['/confirmform1'], {
      queryParams: {
        hebergementData: JSON.stringify(newHebergement)
        
      }
    });
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
