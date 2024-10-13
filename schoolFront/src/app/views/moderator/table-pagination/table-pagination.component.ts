import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HebergementParentService } from 'app/_services/hebergement-parent.service';
import { EleveService } from 'app/_services/eleve.service';
import { ParentService } from 'app/_services/parent.service';
import { EmployeeService } from 'app/_services/employee.service';
import { CreService } from 'app/_services/cre.service';  
import { NotificationService } from 'app/_services/notification.service';
import {  WebsocketService } from 'app/_services/web-socket.service';
import { DemandeService } from 'app/_services/demande.service';
import { SharedService } from 'app/_services/shared.service';

@Component({
  selector: 'app-tablepagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent implements OnInit, AfterViewInit {
  
  columnNames = {
    nom: 'Nom',
    prenom: 'Prénom',
    datedebut: 'Date de début',
    datefin: 'Date de fin',
    libelle: 'Libellé',
    cre: 'Cre',
    selectedEleve: 'Élève sélectionné',
    typeChambre: 'Type de chambre',
    message: 'Message',
    status: 'Statut',
    actions: 'Actions'
  };
  term: any;
  displayedColumns: string[] = ['nom', 'prenom', 'datedebut', 'datefin', 'libelle', 'cre', 'selectedEleve', 'typeChambre', 'message', 'status', 'actions'];
  dataSource = new MatTableDataSource<any>();
  hebergements: any[] = [];
  filteredHebergements: any[] = [];
  selectedEleve: any = {};
  selectedParent: any = {};
  Hebergement: any;
  isTreated = false;
  eleves: any = [];
  idParent: any;
  parents: any = [];
  selectedElement: any;
  infoP: any = {};
  infoE: any = {};
  employeeInfo: any = {};
  creMapping: { [key: number]: string } = {}; // Pour stocker la correspondance entre les ID et les noms des CRE
  noCreMessage: string = "Vous n'êtes pas encore affecté par un CRE.";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  message: any;
  pp: any;
  ghacha:number= null;

  constructor(
    private yService: HebergementParentService,
    private eService: EleveService,
    private pService: ParentService,
    private uService: EmployeeService,
    private creService: CreService,
    private notificationService: NotificationService,
    private websocketService: WebsocketService,
    private sharedService: SharedService
   
   
  ) { }

  ngOnInit(): void {
    const authUser = sessionStorage.getItem('auth-user');
    if (authUser) {
      const user = JSON.parse(authUser);
      const employeeId = user.id;
      console.log('employee (user)ID:', employeeId);

      this.uService.getEmployeeById(employeeId).subscribe(
        (data) => {
          this.employeeInfo = data;
          console.log('employe Information:', this.employeeInfo);
          this.getAllHebergement();
         
        },
        (error) => {
          console.error('Failed to fetch employee information:', error);
        }
      );
    } else {
      console.log('No user information found in session storage.');
    }

    this.getAllParent();
    this.getAllEleves();
    this.getCreMapping(); // Appel à la méthode pour obtenir les CRE
    
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    
  }
 // sendNotificationToEParent(message: string) {
   // this.notificationService.sendNotification(message).subscribe(
    //  () => {
        //console.log('Notification envoyée avec succès à EParent');
    //  },
      //(error) => {
      //  console.error('Erreur lors de l\'envoi de la notification à EParent:', error);
     // }
    //);
  //}
  getCreMapping() {
    this.creService.getAllCre().subscribe(
      (data: any[]) => {
        this.creMapping = data.reduce((acc, cur) => {
          acc[cur.id] = cur.nom;
          return acc;
        }, {});
        this.filterHebergementsByCre(); // Filtrer après avoir obtenu les CRE
      },
      (error) => {
        console.error('Erreur lors de la récupération des CRE :', error);
      }
    );
  }

  getAllHebergement() {
    this.yService.getAllHebergement().subscribe(
      (data: any[]) => {
        this.hebergements = data.map(item => ({
          ...item,
          idParent: item.idParent, 
          isProcessed: localStorage.getItem(`isProcessed_${item.id}`) === 'true' // Récupérer l'état de traitement du stockage local
        }));
        console.log("id mta lparent", this.idParent);
        this.filterHebergementsByCre(); // Filtrer après avoir obtenu les hébergements
      },
      (error) => {
        console.error('Erreur lors de la récupération des hébergements :', error);
      }
    );
  }

  filterHebergementsByCre() {
    if (this.employeeInfo && this.employeeInfo.id_cre && this.creMapping[this.employeeInfo.id_cre]) {
      const employeeCreName = this.creMapping[this.employeeInfo.id_cre];
      this.filteredHebergements = this.hebergements.filter(h => h.cre === employeeCreName);
      this.dataSource.data = this.filteredHebergements;
    } else {
      // Si employeeInfo.id_cre est null, ne pas définir filteredHebergements et afficher le message
      this.dataSource.data = [];
      this.noCreMessage = "Vous n'êtes pas encore affecté par un CRE.";
    }
  }

  applyFilter() {
    if (!this.term || this.term.trim() === '') {
      this.dataSource.data = this.filteredHebergements;
      return;
    }

    const filteredData = this.filteredHebergements.filter(item => {
      return (
        (item.nom && item.nom.toLowerCase().includes(this.term.toLowerCase())) ||
        (item.datedebut && item.datedebut.toLowerCase().includes(this.term.toLowerCase())) ||
        (item.datefin && item.datefin.toLowerCase().includes(this.term.toLowerCase())) ||
        (item.libelle && item.libelle.toLowerCase().includes(this.term.toLowerCase())) ||
        (item.cre && item.cre.toLowerCase().includes(this.term.toLowerCase())) ||
        (item.selectedEleve && item.selectedEleve.toLowerCase().includes(this.term.toLowerCase())) ||
        (item.typeChambre && item.typeChambre.toLowerCase().includes(this.term.toLowerCase())) ||
        (item.status && item.status.toLowerCase().includes(this.term.toLowerCase())) ||
        (item.prenom && item.prenom.toLowerCase().includes(this.term.toLowerCase()))
      );
    });

    this.dataSource.data = filteredData;
  }

  deleteHebergement(id: any) {
    this.yService.deleteHebergement(id).subscribe(
      () => {
        console.log('Hébergement supprimé avec succès');
        this.getAllHebergement();
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'hébergement :', error);
      }
    );
  }

  confirmDeleteHebergement(id: any) {
    if (confirm("Êtes-vous sûr de vouloir refuser cette demande d'hébergement ?")) {
      this.deleteHebergement(id);
    }
  }

  accepter(element: any) {
    this.yService.updateStatus(element.id, 'accepté').subscribe(
      () => {
        console.log('Statut de l\'hébergement mis à jour avec succès');
        const index = this.hebergements.findIndex(item => item.id === element.id);
        if (index !== -1) {
          this.hebergements[index].status = 'accepté';
          this.hebergements[index].isProcessed = true; // Marquer la demande comme traitée
          localStorage.setItem(`isProcessed_${element.id}`, 'true'); // Enregistrer dans le stockage local
          this.dataSource.data = [...this.hebergements];
          this.filterHebergementsByCre();
          this.ghacha=this.ghacha+1;
          console.log("ghacha:",this.ghacha)
         const m= this.showDetails(this.hebergements[index]);

         const nomEleve = this.infoE.nom ? this.infoE.nom.toUpperCase() : '';
                let prenomEleve = this.infoE.prenom ? this.infoE.prenom.toUpperCase() : '';
                let pp = this.infoP.id; 
          const message = `Félicitations ! Votre demande d'hébergement pour votre enfant ${nomEleve} ${prenomEleve}
           a été acceptée  `;
          this.websocketService.sendMessage(message);
const notifObj = {
  message : message ,
idParent : pp
};
console.log("kkkkkkkkkkkkkkk",pp)
        this.notificationService.addNotification(notifObj).subscribe(
          (response)=>
            console.log("ajout reussi du notification dans la table notification ye baba",response)
        )
        
       
        }

        }
          
          
      ) 
        }

  annuler(element: any) {
    const index = this.hebergements.findIndex(item => item.id === element.id);
    if (index !== -1) {
      this.hebergements[index].isProcessed = false;
      localStorage.setItem(`isProcessed_${element.id}`, 'false');
      this.dataSource.data = [...this.hebergements];
      this.filterHebergementsByCre();
    }
  }
  refuser(element: any) {
    this.yService.updateStatus(element.id, 'refusé').subscribe(
      () => {
        console.log('Statut de l\'hébergement mis à jour avec succès');
        const index = this.hebergements.findIndex(item => item.id === element.id);
        if (index !== -1) {
          this.hebergements[index].status = 'refusé';
          this.hebergements[index].isProcessed = true; // Marquer la demande comme traitée
          localStorage.setItem(`isProcessed_${element.id}`, 'true'); // Enregistrer dans le stockage local
          this.dataSource.data = [...this.hebergements];
          this.filterHebergementsByCre();
          const m= this.showDetails(this.hebergements[index]);

         const nomEleve = this.infoE.nom ? this.infoE.nom.toUpperCase() : '';
                const prenomEleve = this.infoE.prenom ? this.infoE.prenom.toUpperCase() : ''
                
                let pp = this.infoP.id; 
          const message = `Nous somme désolé ! Votre demande d'hébergement pour votre enfant ${nomEleve} ${prenomEleve} a été refufée`;
          this.websocketService.sendMessage(message);
    
        
          const notifObj = {
            message : message ,
          idParent : pp
          };
          console.log("kkkkkkkkkkkkkkk",pp)
                  this.notificationService.addNotification(notifObj).subscribe(
                    (response)=>
                      console.log("ajout reussi du notification dans la table notification ",response)
                  )
                  
                
                  }
          
                  }
                    
                    
                ) 
                  }

  getAllEleves() {
    this.eService.getAllEleves().subscribe(
      (response: any) => {
        this.eleves = response;
        console.log("data for get all employees", response);
        console.log(this.eleves);
      }
    );
  }

  getAllParent() {
    this.pService.getAllParent().subscribe(
      (response: any) => {
        this.parents = response;
        console.log("data for get all parents");
      }
    );
  }


  showDetails(element: any) {
    console.log('Élément sélectionné:', element);
  
    if (element && element.idEleve) {
     const eleve = this.eleves.find(e => e.id === element.idEleve);
      if (eleve) {
        console.log('Détails de l\'Élève:', eleve);
        this.infoE=eleve
        // Afficher les détails de l'élève (par exemple, dans une modal)
      } else {
        console.error('Élève introuvable pour l\'ID:', element.idEleve);
      }
    } else {
      console.error('ID Élève non défini dans l\'élément sélectionné:', element);
    }
  
    if (element && element.idParent) {
      const parent = this.parents.find(p => p.id === element.idParent);
      if (parent) {
        console.log('Détails du Parent:', parent);
        this.infoP=parent;
        // Afficher les détails du parent (par exemple, dans une modal)
      } else {
        console.error('Parent introuvable pour l\'ID:', element.idParent);
      }
    } else {
      console.error('ID Parent non défini dans l\'élément sélectionné:', element);
    }
    
  }
 
  
}
