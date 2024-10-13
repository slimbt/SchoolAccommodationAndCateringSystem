import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/_services/auth.service';
import { EmployeeService } from 'app/_services/employee.service';
import { HebergementParentService } from 'app/_services/hebergement-parent.service';
import { HebergementService } from 'app/_services/hebergement.service';
import { SharedService } from 'app/_services/shared.service';
import { StorageService } from 'app/_services/storage.service';

@Component({
  selector: 'moderator-layout',
  templateUrl: './moderator-layout.component.html',
  styleUrls: ['./moderator-layout.component.css']
})
export class ModeratorLayoutComponent implements OnInit {
  currentDate = Date.now();
  data1: { labels: string[]; datasets: { data: number[]; backgroundColor: string[]; hoverBackgroundColor: string[]; }[]; };
  data2: { labels: string[]; datasets: { data: number[]; backgroundColor: string[]; hoverBackgroundColor: string[]; }[]; };
  employeeInfo: any = {};
  hebergements: any = [];
  hebergementss: any = [];
  isLoggedIn = false;
  adad: any;
  occupe: any;
  private roles: string[] = [];
  capaciteHebergementResponsable: number | undefined;

  constructor(
    private eService: EmployeeService,
    private authService: AuthService,
    private dService: HebergementService,
    private element: ElementRef,
    private router: Router,
    private storageService: StorageService,
    private sharedService: SharedService,
    private yService: HebergementParentService
  ) {
    this.data1 = {
      labels: ['Capacité Max', 'Hébergements occupés', 'Hébergements libres'],
      datasets: [
        {
          data: [1, 0, 0],  // Initial value is 0 for "Capacité Max", "Hébergements occupés", "Hébergements libres"
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }
      ]
    };
    this.data2 = {
      labels: ['Capacité Max', 'Hébergements occupés', 'Hébergements libres'],
      datasets: [
        {
          data: [1, 0, 0],  // Initial value is 0 for "Capacité Max", "Hébergements occupés", "Hébergements libres"
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }
      ]
    };
  }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
    }

    const authUser = sessionStorage.getItem('auth-user');
    if (authUser) {
      const user = JSON.parse(authUser);
      const employeeId = user.id;
      console.log('employee (user)ID:', employeeId);

      this.eService.getEmployeeById(employeeId).subscribe(
        (data) => {
          this.employeeInfo = data;
          console.log('employe Information:succee', this.employeeInfo);
        },
        (error) => {
          console.error('Failed to fetch parent information:', error);
        }
      );
    } else {
      console.log('No user information found in session storage.');
    }
    this.getAllHebergement();
    this.getAllDemandehebergement();
  }

  getAllDemandehebergement() {
    this.dService.getAllDemandehebergement().subscribe(
      (response: any) => {
        this.hebergements = response;
        console.log("data for get all demandeHebergement", response);
        this.adad = this.hebergements.length;
        console.log("data for get all zaaaaaaaaaaah", this.hebergements);
        const responsable = `${this.employeeInfo.nom} ${this.employeeInfo.prenom}`;

        // Parcourir les demandes d'hébergement
        this.hebergements.forEach((demande: any) => {
          // Vérifier si le responsable correspond à l'employé
          if (demande.responsable === responsable) {
            // Extraire la capacité de l'hébergement correspondant
            this.capaciteHebergementResponsable = demande.capacite;
          }
        });

        // Vérifier si la capacité a été trouvée
        if (this.capaciteHebergementResponsable !== undefined) {
          console.log('Capacité de l\'hébergement pour l\'employé responsable:', this.capaciteHebergementResponsable);
          this.updateChart();
        } else {
          console.log('Aucune capacité trouvée pour l\'employé responsable.');
        }
      }
    );
  }

  updateChart() {
    if (this.capaciteHebergementResponsable !== undefined) {
      this.data1.datasets[0].data[0] = this.capaciteHebergementResponsable; // Capacité Max
      this.data1.datasets[0].data[1] = this.occupe; // Hébergements occupés
      this.data1.datasets[0].data[2] = this.capaciteHebergementResponsable - this.occupe; // Hébergements libres
      this.data1 = { ...this.data1 };  // Ensure change detection triggers
    }
  }

  getAllHebergement() {
    this.yService.getAllHebergement().subscribe(
      (data: any[]) => {
        this.hebergementss = data.map(item => ({
          ...item,
          idParent: item.id,
          isProcessed: localStorage.getItem(`isProcessed_${item.id}`) === 'true' // Récupérer l'état de traitement du stockage local
        }));
        console.log("traaaaah ?????????????????????", this.hebergementss);

        this.occupe = this.hebergementss.filter(hebergement => hebergement.status === 'accepté').length;
        this.updateChart();
      },
      (error) => {
        console.error('Erreur lors de la récupération des hébergements :', error);
      }
    );
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        // Redirection vers la page d'accueil
        window.location.href = 'http://localhost:4200/';

        // Si vous préférez utiliser la méthode navigate de Router :
        // this.router.navigate(['/']);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
