import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreService } from 'app/_services/cre.service';
import { EmployeeService } from 'app/_services/employee.service';
import { RestaurationService } from 'app/_services/restauration.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  ajoutRestaurationForm: FormGroup;
  restaurations: any = [];
  term: any;
  id: any;
  Restauration: any = {};
  employees: any = [];
  selectedResponsable: string = '';
  cres: any = [];
  emps:any=[];

  constructor(private activatedRoute: ActivatedRoute, private eService: RestaurationService, private employeeService: EmployeeService, private cService: CreService) { }

  ngOnInit(): void {
    this.loadEmployees()
    this.getAllCre();
    if (this.restaurations.length === 0) {
      // Si les données ne sont pas déjà chargées, charger les employés
      this.getAllDemanderestauration();
    }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id != null && this.id != undefined) {
      this.getDemanderestaurationById(this.id);
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
  getAllDemanderestauration() {
    this.eService.getAllDemanderestauration().subscribe(
      (response: any) => {
        this.restaurations = response;
        this.sortEmployeesByCreatedAt();
        console.log("data for get all demandeRestauration", response);
      }
    );
  }

  deleteDemanderestauration(id: any) {
    this.eService.deleteDemanderestauration(id).subscribe(
      (response) => {
        console.log("service", response);
        this.getAllDemanderestauration();
      }
    );
  }

  confirmDelete(id: any) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette restauration ?")) {
      this.deleteDemanderestauration(id);
    }
  }

  getDemanderestaurationById(id: any) {
    this.eService.getDemanderestaurationById(id).subscribe(
      (restauration: any) => {
        this.Restauration = restauration;
      },
      (error) => {
        console.error("Error fetching restauration by ID", error);
      }
    );
  }
  sortEmployeesByCreatedAt() {
    this.restaurations.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  addRestauration() {
    const creName = this.Restauration.cre; // Nom du CRE sélectionné

    // Trouver l'ID du CRE correspondant au nom sélectionné
    const selectedCre = this.cres.find(cre => cre.nom === creName);
    const creId = selectedCre ? selectedCre.id : null;

    // Trouver l'employé responsable sélectionné
    const selectedEmployee = this.employees.find(employee => 
        employee.nom + ' ' + employee.prenom === this.Restauration.responsable
    );

    console.log('Employé ID et CRE ID', selectedEmployee.id, creId);
    
    // Mettre à jour l'attribut CRE de l'employé responsable
    if (selectedEmployee && creId) {
      selectedEmployee.creId = creId;
  
      // Mise à jour de l'employé avec l'ID du CRE
      this.employeeService.updateEmployeeCre(selectedEmployee.id, creId).subscribe(
        (response) => {
          console.log('Employé mis à jour avec succès !', response);
          console.log('Employé ID et CRE ID', selectedEmployee.id, creId);
        }
      );
    }

    // Ajouter la restauration après la mise à jour de l'employé
    this.eService.addDemanderestauration(this.Restauration).subscribe(
      (response) => {
        console.log('Restauration ajoutée avec succès !', response);
        this.getAllDemanderestauration();
        this.Restauration = {};
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la restauration :', error);
      }
    );
  }

  onEdit(restauration: any) {
    restauration.isEdit = true;
  }

  onUpdate(restauration: any) {
    this.eService.updateDemanderestauration(restauration).subscribe(
      (response) => {
        console.log("Service response", response);
        restauration.isEdit = false;
        this.sortEmployeesByCreatedAt();
      },
      (error) => {
        console.error("Error updating restauration", error);
      }
    );
  }

  onCancel(restauration: any) {
    restauration.isEdit = false;
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
