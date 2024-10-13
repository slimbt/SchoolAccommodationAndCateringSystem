import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CreService } from 'app/_services/cre.service';
import { EleveService } from 'app/_services/eleve.service';
import { EmployeeService } from 'app/_services/employee.service';
import { NotificationService } from 'app/_services/notification.service';
import { ParentService } from 'app/_services/parent.service';
import { ReclamationService } from 'app/_services/reclamation.service';
import { ReponseService } from 'app/_services/reponse.service';
import { WebsocketService } from 'app/_services/web-socket.service';

@Component({
  selector: 'app-table-pagination-rec',
  templateUrl: './table-pagination-rec.component.html',
  styleUrls: ['./table-pagination-rec.component.css']
})
export class TablePaginationRecComponent implements OnInit {

  columnNames = {
    nomExpediteur: 'Nom',
    prenomExpediteur: 'Prénom',
   
    telephone: 'Téléphone ',
    cre: 'Cre ',
    libelle: 'Libellé ',
    objet: 'Objet',
    message: 'Message',
    status: 'Statut',
    actions: 'Actions'
  };
  term: any;
  displayedColumns: string[] = ['nomExpediteur', 'prenomExpediteur', 'telephone','cre','libelle', 'objet', 'message','status',  'actions'];
  dataSource = new MatTableDataSource<any>();
  reclamations: any[] = [];
  selectedEleve: any = {};
  selectedParent:any ={};
  Hebergement: any;
  isTreated = false;
  elevess: any = [];
  idParent:any;
  parentss:any =[];
  selectedElement: any;
  infoPP:any={};
  infoEE:any={};
  filteredHebergements: any[] = [];
  employeeInfo: any = {};
  creMapping: { [key: number]: string } = {}; // Pour stocker la correspondance entre les ID et les noms des CRE
  noCreMessage: string = "Vous n'êtes pas encore affecté par un CRE.";
  message: string = '';
  selectedParentInfo: any;
  selectedParentId:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private yService: ReclamationService, private pService: ParentService , private eService :EleveService, private uService:EmployeeService,private creService:CreService,private reponseService: ReponseService, private websocketService:WebsocketService,private notificationService:NotificationService) { }

  
  ngOnInit(): void {{
    const authUser = sessionStorage.getItem('auth-user');
    if (authUser) {
      const user = JSON.parse(authUser);
      const employeeId = user.id;
      console.log('employee (user)ID:', employeeId);

      this.uService.getEmployeeById(employeeId).subscribe(
        (data) => {
          this.employeeInfo = data;
          console.log('employe Information:', this.employeeInfo);
          this.getAllReclamations();
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
  
  }}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllReclamations() {
    this.yService.getAllReclamations().subscribe(
      (data: any[]) => {
        this.reclamations = data.map(item => ({
          ...item,
          idParent: item.idParent, // Assurez-vous que idParent est attribué correctement
          isProcessed: localStorage.getItem(`isProcessed_${item.id}`) === 'true' // Récupérer l'état de traitement du stockage local
        }));
        console.log("id mta lparent", this.idParent)
        this.dataSource.data = this.reclamations;
        this.filterReclamationsByCre();
        
      },
      (error) => {
        console.error('Erreur lors de la récupération des Reclamation :', error);
      }
    );
  }
  
  applyFilter() {
    if (!this.term || this.term.trim() === '') {
      this.dataSource.data = this.reclamations;
      return;
    }

    const filteredData = this.reclamations.filter(item => {
      return (
        (item.nom && item.nom.toLowerCase().includes(this.term.toLowerCase())) ||
        (item.datedebut && item.datedebut.toLowerCase().includes(this.term.toLowerCase())) ||
        (item.datefin && item.datefin.toLowerCase().includes(this.term.toLowerCase())) ||
        (item.libelle && item.libelle.toLowerCase().includes(this.term.toLowerCase())) ||
        (item.cre && item.cre.toLowerCase().includes(this.term.toLowerCase())) ||
        (item.selectedEleve && item.selectedEleve.toLowerCase().includes(this.term.toLowerCase())) ||
        (item.type && item.type.toLowerCase().includes(this.term.toLowerCase())) ||
        (item.status && item.status.toLowerCase().includes(this.term.toLowerCase())) ||
        (item.prenom && item.prenom.toLowerCase().includes(this.term.toLowerCase()))  ||
        (item.prenomExpediteur && item.prenomExpediteur.toLowerCase().includes(this.term.toLowerCase())) ||
        (item.nomExpediteur && item.nomExpediteur.toLowerCase().includes(this.term.toLowerCase())) 
      );
    });

    this.dataSource.data = filteredData;
  }

  deleteReclamations(id: any) {
    this.yService.deleteReclamations(id).subscribe(
      () => {
        console.log('Reclamation supprimé avec succès');
        this.getAllReclamations();
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'Reclamation :', error);
      }
    );
  }

  confirmDeleteHebergement(id: any) {
    if (confirm("Êtes-vous sûr de vouloir refuser cette Reclamation ?")) {
      this.deleteReclamations(id);
    }
  }


  getCreMapping() {
    this.creService.getAllCre().subscribe(
      (data: any[]) => {
        this.creMapping = data.reduce((acc, cur) => {
          acc[cur.id] = cur.nom;
          return acc;
        }, {});
        this.filterReclamationsByCre(); // Filtrer après avoir obtenu les CRE
      },
      (error) => {
        console.error('Erreur lors de la récupération des CRE :', error);
      }
    );
  }
  filterReclamationsByCre() {
    if (this.employeeInfo && this.employeeInfo.id_cre && this.creMapping[this.employeeInfo.id_cre]) {
      const employeeCreName = this.creMapping[this.employeeInfo.id_cre];
      this.filteredHebergements = this.reclamations.filter(h => h.cre === employeeCreName);
      this.dataSource.data = this.filteredHebergements;
    } else {
      // Si employeeInfo.id_cre est null, ne pas définir filteredHebergements et afficher le message
      this.dataSource.data = [];
      this.noCreMessage = "Vous n'êtes pas encore affecté par un CRE.";
    }
  }
  
  
  getAllEleves() {
    this.eService.getAllEleves().subscribe(
      (response: any) => {
        this.elevess = response;
        console.log("data for get all eleves", response);
        console.log(this.elevess);
  
      }   
    );
  }
  getAllParent() {
    this.pService.getAllParent().subscribe(
      (response: any) => {
        this.parentss = response;
        console.log("data for get all parents", response);
        console.log(this.parentss);

  })
  
}

showDetails(element: any) {
  console.log('Élément sélectionné:', element);

  if (element && element.idEleve) {
   const eleve = this.elevess.find(e => e.id === element.idEleve);
    if (eleve) {
      console.log('Détails de l\'Élève:', eleve);
      this.infoEE=eleve
      // Afficher les détails de l'élève (par exemple, dans une modal)
    } else {
      console.error('Élève introuvable pour l\'ID:', element.idEleve);
    }
  } else {
    console.error('ID Élève non défini dans l\'élément sélectionné:', element);
  }

  if (element && element.idParent) {
    const parent = this.parentss.find(p => p.id === element.idParent);
    if (parent) {
      console.log('Détails du Parent:', parent);
      this.infoPP=parent;
      // Afficher les détails du parent (par exemple, dans une modal)
    } else {
      console.error('Parent introuvable pour l\'ID:', element.idParent);
    }
  } else {
    console.error('ID Parent non défini dans l\'élément sélectionné:', element);
  }
  
}



accepter(element: any) {
  this.yService.updateStatus(element.id, 'répondu').subscribe(
    () => {
      console.log('Statut de l\'Reclamation mis à jour avec succès');
      const index = this.reclamations.findIndex(item => item.id === element.id);
      if (index !== -1) {
        this.reclamations[index].status = 'répondu';
        this.reclamations[index].isProcessed = true; // Marquer la demande comme traitée
        localStorage.setItem(`isProcessed_${element.id}`, 'true'); // Enregistrer dans le stockage local
        this.dataSource.data = [...this.reclamations];
        this.filterReclamationsByCre()
      }
    },
    (error) => {
      console.error('Erreur lors de la mise à jour du statut de l\'Reclamation :', error);
    }
  );
}
annuler(element:any){
  const index = this.reclamations.findIndex(item => item.id === element.id);
  if (index !== -1) {
    this.reclamations[index].isProcessed = false;

}
}
refuser(element: any) {
  this.yService.updateStatus(element.id, 'accepté').subscribe(
    () => {
      console.log('Statut de l\'Reclamation mis à jour avec succès');
      const index = this.reclamations.findIndex(item => item.id === element.id);
      if (index !== -1) {
        this.reclamations[index].status = 'accepté';
        this.reclamations[index].isProcessed = true; // Marquer la demande comme traitée
        localStorage.setItem(`isProcessed_${element.id}`, 'true'); // Enregistrer dans le stockage local
        this.dataSource.data = [...this.reclamations];
        this.filterReclamationsByCre()
      }
    },
    (error) => {
      console.error('Erreur lors de la mise à jour du statut de l\'Reclamation :', error);
    }
  );
}



replyToComplaint(element: any) {
  if (!element) {
    console.error('No element provided');
    return;
  }

 

  if (element.idParent) {
    const parent = this.parentss.find(p => p.id === element.idParent);
    if (parent) {
      console.log('Détails du Parent:', parent);
      this.infoPP = parent;
      // Afficher les détails du parent (par exemple, dans une modal)
    } else {
      console.error('Parent introuvable pour l\'ID:', element.idParent);
    }
  } else {
    console.error('ID Parent non défini dans l\'élément sélectionné:', element);
  }
  const index = this.reclamations.findIndex(item => item.id === element.id);
 

  const message = prompt("Ecrivez votre réponse ici pour le parent:  ");
  if (message !== null && message.trim() !== '') { // Check if the user entered a non-empty message
    const nouvelleReponse = {
      idParent: this.infoPP.id,
      message: message,
      objet: this.reclamations[index].objet
    };

    // Here you can call your service method to save the response
    // For example:
    this.reponseService.addReponse(nouvelleReponse).subscribe(
      () => {
        console.log('Response saved successfully');
        // You may want to update the UI to reflect that a response has been saved
  this.accepter(element);
  const message = `Vous avez reçu une réponse pour votre réclamation ! vous pouvez la consulter ! `;
 this.websocketService.sendMessage(message);
 const notifObj = {
  message : message ,
idParent : this.infoPP.id
};

        this.notificationService.addNotification(notifObj).subscribe(
          (response)=>
            console.log("ajout reussi du notification dans la table notification ye baba",response)
        )
        
        
        

      },
      (error) => {
        console.error('Error saving response:', error);
      }
    );
  } else {
    console.log('No response provided or empty response.');
    // You may want to handle this case, such as displaying a message to the user.
  }
}




}