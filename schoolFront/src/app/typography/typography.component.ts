import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreService } from 'app/_services/cre.service';
import { EmployeeService } from 'app/_services/employee.service';
import { HebergementService } from 'app/_services/hebergement.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  ajoutHebergementForm: FormGroup;
  hebergements: any = [];
  term: any;
  id: any;
  Hebergement: any = {};
  employees: any = [];
  selectedResponsable: string = '';
  cres: any = [];
  emps:any=[];
  constructor(private activatedRoute: ActivatedRoute, private eService: HebergementService, private employeeService: EmployeeService,private cService:CreService) { }

  ngOnInit(): void {
    this.loadEmployees();
    this.getAllCre();
    if (this.hebergements.length === 0) {
      // Si les données ne sont pas déjà chargées, charger les employés
      this.getAllDemandehebergement();
    }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id != null && this.id != undefined) {
      this.getDemandehebergementById(this.id);
    }
    this.getAllEmployees();
  }
  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      (response: any) => {
        this.employees = response;
      },
      (error) => {
        console.error("Error fetching employees", error);
      }
    );
  }

  loadEmployees(): void {
    this.employeeService.getOnlyEmployees().subscribe(
      emps => {
        this.emps = emps;
        this.sortEmployeesByCreatedAt();
      },
      error => {
        console.error('Error fetching admins:', error);
      }
    );
  }
  
  getAllDemandehebergement() {
    this.eService.getAllDemandehebergement().subscribe(
      (response: any) => {
        this.hebergements = response;
        this.sortEmployeesByCreatedAt();
        console.log("data for get all demandeHebergement", response)
      }
    );
  }

  deleteDemandehebergement(id: any) {
    this.eService.deleteDemandehebergement(id).subscribe(
      (response) => {
        console.log("service", response)
        this.getAllDemandehebergement()
      }
    )
  }

  confirmDelete(id: any) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette hebergement ?")) {
      this.deleteDemandehebergement(id);
    }
  }

  getDemandehebergementById(id: any) {
    this.eService.getDemandehebergementById(id).subscribe(
      (hebergement: any) => {
        this.Hebergement = hebergement;
      },
      (error) => {
        console.error("Error fetching hebergement by ID", error);
      }
    );
  }
  sortEmployeesByCreatedAt() {
    this.hebergements.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  addHebergment() {
    const creName = this.Hebergement.cre; // Nom du CRE sélectionné

    // Trouver l'ID du CRE correspondant au nom sélectionné
    const selectedCre = this.cres.find(cre => cre.nom === creName);
    const creId = selectedCre ? selectedCre.id : null;

    // Trouver l'employé responsable sélectionné
    const selectedEmployee = this.employees.find(employee => 
        employee.nom + ' ' + employee.prenom === this.Hebergement.responsable
    );

    console.log('haw el employeID wel CREID',selectedEmployee.id, creId )
    // Mettre à jour l'attribut CRE de l'employé responsable
    if (selectedEmployee && creId) {
      selectedEmployee.creId = creId;
  
        // Mise à jour de l'employé avec l'ID du CRE
        this.employeeService.updateEmployeeCre(selectedEmployee.id, creId).subscribe(
          (response) => {
            console.log('Employé mis à jour avec succès !', response);
            console.log('haw el employeID wel CREID',selectedEmployee.id, creId )}
          )}
  
            // Ajouter l'hébergement après la mise à jour de l'employé
            this.eService.addDemandehebergement(this.Hebergement).subscribe(
              (response) => {
                  console.log('Hébergement ajouté avec succès !', response);
                  this.getAllDemandehebergement();
                  this.Hebergement = {};
              },
              (error) => {
                  console.error('Erreur lors de l\'ajout de l\'hébergement :', error);
              }
            );
          }
      
  
  

  onEdit(hebergement: any) {

    hebergement.isEdit = true;
  }

  onUpdate(hebergement: any) {
    
    this.eService.updateDemandehebergement(hebergement).subscribe(
      (response) => {
        console.log("Service response", response);
        hebergement.isEdit = false;
        this.sortEmployeesByCreatedAt();
      },
      (error) => {
        console.error("Error updating hebergement", error);
      }
    );
  }

  onCancel(hebergement: any) {

    hebergement.isEdit = false;
  }
  onSelectResponsable(responsable: string) {
    this.selectedResponsable = responsable;
  }

  getAllCre() {
    this.cService.getAllCre().subscribe(
      (response: any) => {
        this.cres = response;
      },
      (error) => {
        console.error("Error fetching CREs", error);
      }
    );
  }
}
