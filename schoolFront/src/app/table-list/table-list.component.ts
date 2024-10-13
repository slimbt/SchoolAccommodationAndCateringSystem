import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'app/_services/employee.service';
import { AuthService } from 'app/_services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  ajoutEmployeeForm: FormGroup;
  employees: any = [];
  term: any;
  id: any;
  emps: any=[];
  employeeForm: any = {
    username: null,
    email: null,
    password: null,
    nom: null,
    prenom: null,
    cin: null,
    poste: null,
    telephone: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  selectedPhoto: File | null = null;
  photoPath:any;
  @ViewChild('fileInput') fileInput: ElementRef;
  constructor(
    private activatedRoute: ActivatedRoute,
    private eService: EmployeeService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    if (this.emps.length === 0) {
      this.loadEmployees();
    }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id != null && this.id != undefined) {
      this.getEmployeeById(this.id);
    }
  }

  getAllEmployees() {
    this.eService.getAllEmployees().subscribe(
      (response: any) => {
        this.employees = response;
        this.sortEmployeesByCreatedAt();
      },
      (error) => {
        console.error('Error fetching employees', error);
      }
    );
  }

  loadEmployees(): void {
    this.eService.getOnlyEmployees().subscribe(
      emps => {
        this.emps = emps;
        this.sortEmployeesByCreatedAt();
      },
      error => {
        console.error('Error fetching admins:', error);
      }
    );
  }



  sortEmployeesByCreatedAt() {
    this.emps.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  deleteEmployee(id: any) {
    this.eService.deleteEmployee(id).subscribe(
      (response) => {
        console.log('Deleted employee', response);
        this.loadEmployees();
      },
      (error) => {
        console.error('Error deleting employee', error);
      }
    );
  }

  confirmDeleteEmployee(id: any) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet employé ?")) {
      this.deleteEmployee(id);
    }
  }

  getEmployeeById(id: any) {
    this.eService.getEmployeeById(id).subscribe(
      (employee: any) => {
        this.employeeForm = employee;
      },
      (error) => {
        console.error('Error fetching employee by ID', error);
      }
    );
  }
  onPhotoChange(event: any, fileLabel: HTMLElement) {
    this.selectedPhoto = event.target.files[0]; // Get the first selected file
    if (this.selectedPhoto) {
      this.photoPath = this.selectedPhoto.name;
      // Update the span text
      this.renderer.setProperty(fileLabel, 'textContent', this.photoPath);
    } else {
      // Reset to default if no file is selected
      this.renderer.setProperty(fileLabel, 'textContent', 'Choisissez un fichier...');
    }
  }
  addEmployee() {
    const { username, email, password, nom, prenom, cin, poste, telephone } = this.employeeForm;
    this.authService.register(username, email, password, ['mod'], nom, prenom, cin, poste, '', '', telephone, this.photoPath).subscribe(
      (userResponse) => {
        console.log('Utilisateur enregistré avec succès!', userResponse);
        this.loadEmployees();
        this.employeeForm = {}; 
        this.photoPath = ''; // Reset the photo path
        if (this.fileInput) {
          this.fileInput.nativeElement.value = ''; // Reset the file input
        }
        // Reset the file label text
        const fileLabel = this.fileInput.nativeElement.nextElementSibling;
        this.renderer.setProperty(fileLabel, 'textContent', 'Choisissez un fichier...');
      },
      (error) => {
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
      }
    );
}

  onEdit(employee: any) {
    employee.isEdit = true;
  }

  onUpdate(employee: any) {
    this.eService.updateEmployee(employee).subscribe(
      (response) => {
        console.log('Updated employee', response);
        employee.isEdit = false;
        this.sortEmployeesByCreatedAt();
      },
      (error) => {
        console.error('Error updating employee', error);
      }
    );
  }

  onCancel(employee: any) {
    employee.isEdit = false;
  }

  validateEmail() {
    this.ajoutEmployeeForm.controls['email'].markAsTouched();
  }
}
