import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EleveService } from 'app/_services/eleve.service';
import { HebergementParentService } from 'app/_services/hebergement-parent.service';
import { HebergementService } from 'app/_services/hebergement.service';
import { ParentService } from 'app/_services/parent.service';
import { RestaurationParentService } from 'app/_services/restauration-parent.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  parentInfo: any = {}; 
  eleves: any = [];
  demandes: any[] = [];
  demandesR: any[] = [];
  sortField: string;
  sortOrder: number;
  sortKey: string;
  toggleOptions = [
    { label: 'Hébergement', value: 'hebergement' },
    { label: 'Restauration', value: 'restauration' } ];
  filteredDemandes: any[] = []; 
  selectedOption: string;
  demandesr: any;
  constructor(
    private pService: ParentService,
    private eService: EleveService,
    private route: ActivatedRoute,
    private yservice: HebergementParentService,
    private router: Router,
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
         this.getRestaurationByParentId(this.parentInfo.id);
        },
        (error) => {
          console.error('Failed to fetch parent information:', error);
        }
      );
    } else {
      console.log('No user information found in session storage.');
    }
    this.filteredDemandes = this.demandes;
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
        // Filtrer les demandes avec un statut non null
        this.demandes = response.filter(demande => demande.status !== null);
        console.log("Requests data:", this.demandes);
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
       
      },
      (error) => {
        console.error('Failed to fetch requests:', error);
      }
    );
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
}
