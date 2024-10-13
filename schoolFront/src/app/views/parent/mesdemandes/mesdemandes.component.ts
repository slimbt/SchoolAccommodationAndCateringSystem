import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EleveService } from 'app/_services/eleve.service';
import { HebergementParentService } from 'app/_services/hebergement-parent.service';
import { HebergementService } from 'app/_services/hebergement.service';
import { ParentService } from 'app/_services/parent.service';
import { RestaurationParentService } from 'app/_services/restauration-parent.service';
import { SelectItem } from 'primeng/api';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-mesdemandes',
  templateUrl: './mesdemandes.component.html',
  styleUrls: ['./mesdemandes.component.css']
})
export class MesdemandesComponent implements OnInit {
  parentInfo: any = {}; 
  eleves: any = [];
  demandesH: any[] = [];
  demandesR: any[] = [];
  filteredDemandes: any[] = []; 
  sortOptions: SelectItem[];
  sortField: string;
  sortOrder: number;
  sortKey: string;
  toggleOptions: SelectItem[] = [
    { label: 'Hébergement', value: 'hebergement' },
    { label: 'Restauration', value: 'restauration' }
  ];
  selectedOption: string = 'hebergement';
  message: any = "pas de demandes";
 
  constructor(
    private pService: ParentService,
    private eService: EleveService,
    private route: ActivatedRoute,
    private yservice: HebergementParentService,
    private router: Router,
    private dService: HebergementService,
    private rService: RestaurationParentService
  ) { }

  ngOnInit(): void {
    const authUser = sessionStorage.getItem('auth-user');
    if (authUser) {
      const user = JSON.parse(authUser);
      const parentId = user.id;
      console.log('Parent ID:', parentId);

      this.pService.getParentById(parentId).subscribe(
        (data) => {
          this.parentInfo = data;
          console.log('Parent Information:', this.parentInfo.id);
          this.getAllEleve(this.parentInfo.id);
          this.getDemandesByParentId(this.parentInfo.id);
          this.getRestaurationByParentId(this.parentInfo.id); // Ajouté pour initialiser les demandes de restauration
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
        console.log("Data for get all eleves:", response);
      }   
    );
  }

  getDemandesByParentId(parentId: any) {
    this.yservice.getHebergementByParentId(parentId).subscribe(
      (response: any[]) => {
        this.demandesH = response;
        console.log("Requests data:", response);
        this.onToggleChange(); // Mise à jour des demandes filtrées après récupération
      },
      (error) => {
        console.error('Failed to fetch requests:', error);
      }
    );
  }

  getRestaurationByParentId(parentId: any) {
    this.rService.getRestaurationByParentId(parentId).subscribe(
      (response: any[]) => {
        this.demandesR = response;
        console.log("Requests data:", response);
        this.onToggleChange(); // Mise à jour des demandes filtrées après récupération
      },
      (error) => {
        console.error('Failed to fetch requests:', error);
      }
    );
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  getBadgeClass(status: string): string {
    switch (status) {
      case 'accepté':
        return 'badge-success';
      case 'en attente':
        return 'badge-warning';
      case 'refusé':
        return 'badge-danger';
      default:
        return 'badge-secondary';
    }
  }

  onToggleChange() {
    if (this.selectedOption === 'hebergement') {
      this.filteredDemandes = this.demandesH;
    } else if (this.selectedOption === 'restauration') {
      this.filteredDemandes = this.demandesR;
    }
  }
  

  

  imprimerPDF(demande: any) {
    const doc = new jsPDF();
  
    // Titre centré et en gras
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    const title = 'Facture de votre demande';
    const titleWidth = doc.getStringUnitWidth(title) * 18 / doc.internal.scaleFactor;
    const x = (doc.internal.pageSize.width - titleWidth) / 2;
    doc.text(title, x, 15);
  
    // Réinitialisation de la police et de la taille
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
  
    // Contenu de la demande
    let y = 30;
    doc.text(`Nom : ${demande.nom}`, 10, y += 10);
    doc.text(`Prénom : ${demande.prenom}`, 10, y += 10);
    doc.text(`Élève sélectionné: ${demande.selectedEleve}`, 10, y += 10);
    doc.text(`Cre : ${demande.cre}`, 10, y += 10);
    doc.text(`Libellé : ${demande.libelle}`, 10, y += 10);
    if (demande.typeChambre) {
      doc.text(`Type de Chambre : ${demande.typeChambre}`, 10, y += 10);
    }
    if (demande.type) {
      doc.text(`Type : ${demande.type}`, 10, y += 10);
    }
    doc.text(`Date : ${demande.datedebut} - ${demande.datefin}`, 10, y += 10);
    if (demande.message) {
      doc.text(`Message : ${demande.message}`, 10, y += 10);
    }
    doc.text(`Envoyée le : ${demande.createdAt}`, 10, y += 10);
  
    // Calcul du montant à payer en fonction de la date de fin
    let montantAPayer = 700; // Valeur par défaut
  
    if (demande.datefin === '23 décembre 2024') {
      montantAPayer = 200;
    } else if (demande.datefin === '20 avril 2024') {
      montantAPayer = 400;
    }
  
    // Ajout du champ montant à payer
    const montantText = `Montant à payer: ${montantAPayer} TND`;
    const montantWidth = doc.getStringUnitWidth(montantText) * 12 / doc.internal.scaleFactor;
    const montantX = (doc.internal.pageSize.width - montantWidth) / 2;
    doc.text(montantText, montantX, y += 15);
  
    // Souligner le montant à payer
    const underlineY = y + 2;
    const underlineXStart = montantX - 2;
    const underlineXEnd = montantX + montantWidth + 2;
    doc.setLineWidth(0.5);
    doc.line(underlineXStart, underlineY, underlineXEnd, underlineY);
  
    // Ajout de l'image de signature à droite
    const img = new Image();
    img.src = 'assets/assets/images/signature.png'; // Chemin vers l'image de signature
    const imgWidth = 80; // Largeur de l'image
    const imgHeight = 38; // Hauteur de l'image
    const imgX = doc.internal.pageSize.width - imgWidth - 10; // Position x à droite avec une marge de 10
    const imgY = doc.internal.pageSize.height - imgHeight - 110; // Position y en bas avec une marge de 10
    doc.addImage(img, 'PNG', imgX, imgY, imgWidth, imgHeight);
  
    // Sauvegarde du document avec un nom de fichier spécifique
    doc.save(`${demande.nom}_${demande.prenom}_facture.pdf`);
  }
  
  
  
  
  
  
  
}