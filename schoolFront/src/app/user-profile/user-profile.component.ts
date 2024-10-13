import { Component, OnInit } from '@angular/core';
import { AdminService } from 'app/_services/admin.service';
import { AuthService } from 'app/_services/auth.service';
import { EmployeeService } from 'app/_services/employee.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  admins: any[];
  form: any = {
    username: null,
    email: null,
    password: null,
    nom:null,
    prenom:null,
    cin:null,
    poste:null,
    telephone:null,
    role: [] // Initialisation du champ role en tant que tableau vide
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private adminService: AdminService, private eService: EmployeeService) { }

  ngOnInit(): void { this.loadAdmins();
  }

  onSubmit(): void {
    const { username, email, password,nom,prenom,cin,poste,profession,adresse,telephone,photo} = this.form;

    // Définissez le rôle admin comme un tableau contenant une seule valeur 'admin'
    const role = ['admin'];

    this.authService.register(username, email, password, role,nom,prenom,cin,poste,profession,adresse,telephone,photo).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        window.location.reload();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
  loadAdmins(): void {
    this.eService.getAdminEmployees().subscribe(
      admins => {
        this.admins = admins;
      },
      error => {
        console.error('Error fetching admins:', error);
      }
    );
  }
}
