import { Component, OnInit } from '@angular/core';
import { CreService } from 'app/_services/cre.service';
import { EleveService } from 'app/_services/eleve.service';
import { FeedbackService } from 'app/_services/feedback.service';
import { HebergementParentService } from 'app/_services/hebergement-parent.service';
import { HebergementService } from 'app/_services/hebergement.service';
import { ParentService } from 'app/_services/parent.service';
import { RestaurationParentService } from 'app/_services/restauration-parent.service';
import { RestaurationService } from 'app/_services/restauration.service';
import * as Chartist from 'chartist';
import * as Chart from 'chart.js';
import { EmployeeService } from 'app/_services/employee.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  numberOfParents: number;
  NumberOfHebergement:number;
  NumberOfRestauration:number;
  NumberOfEleve:number;
  NumberOfCre:number;
  NumberOfFeedback:number;
  numberOfHebergAdmin:number;
  numberOfResAdmin:number;
  numberOfemp:number;
  emps:any=[];
  longeuremp: number;
  creLabels: string[] = [];
  creData: number[] = [];
  basicData: any;
  basicData2: any;
  
  basicOptions: any = {
    title: {
      display: true,
      text: 'Résumé des statistiques',
      fontSize: 16
    },
    legend: {
      position: 'bottom'
    }
  };
  constructor(private parentService: ParentService,private hService:HebergementParentService,private rService:RestaurationParentService,private eService:EleveService,private creService:CreService,private fService:FeedbackService,private dh:HebergementService, private rh:RestaurationService, private emp:EmployeeService) { }
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {
    this.loadEmployees();
    this.loadData();
    this.loadChartData();
    console.log("hedhi stat héber",this.loadChartData)
    this.loadChartData2() ;
    console.log("hedhi stat res",this.loadChartData2)
  }

  loadData() {
    
    this.parentService.getNumberOfParents().subscribe(
      count => {
        this.numberOfParents = count;
       
      }
    );

    this.emp.getNumberOfemp().subscribe(
      count => {
        this.numberOfemp = count;
       
      }
    );

    this.dh.getNumberOfHebergementAdmin().subscribe(
      count => {
        this.numberOfHebergAdmin = count;
     
      }
    );

    this.rh.getNumberOfRestaurationAdmin().subscribe(
      count => {
        this.numberOfResAdmin = count;
      
      }
    );

    this.hService.getNumberOfHebergement().subscribe(
      count => {
        this.NumberOfHebergement = count;
       
      }
    );

    this.rService.getNumberOfRestauration().subscribe(
      count => {
        this.NumberOfRestauration = count;
      
      }
    );

    this.eService.getNumberOfEleve().subscribe(
      count => {
        this.NumberOfEleve = count;
      
      }
    );

    this.creService.getNumberOfCre().subscribe(
      count => {
        this.NumberOfCre = count;
       
      }
    );

    this.fService.getNumberOfFeedback().subscribe(
      count => {
        this.NumberOfFeedback = count;
        
      }
      
    );
  }
  loadEmployees(): void {
    this.emp.getOnlyEmployees().subscribe(
      emps => {
        this.emps = emps;
        this.longeuremp= emps.length;
        
      },
      error => {
        console.error('Error fetching admins:', error);
      }
    );
  }
  loadChartData() {
    this.hService.getNumberOfHebergementByCre().subscribe(
      data => {
        console.log('Données hébergement:', data); // Vérifiez les données récupérées
        const labels = data.map(item => item[0]); // Première colonne est le CRE
        const counts = data.map(item => item[1]); // Deuxième colonne est le nombre d'hébergements
  
        this.basicData = {
          labels: labels,
          datasets: [
            {
              label: 'Nombre de demandes d\'hébergements par CRE',
              backgroundColor: '#2196f3', // Couleur de fond du graphique
              data: counts
            }
          ]
        };
      },
      error => {
        console.error('Erreur lors du chargement des données:', error);
      }
    );
  }
  
  loadChartData2() {
    this.rService.getNumberOfRestaurationByCre().subscribe(
      data => {
        console.log('Données restauration:', data); // Vérifiez les données récupérées
        const labels = data.map(item => item[0]); // Première colonne est le CRE
        const counts = data.map(item => item[1]); // Deuxième colonne est le nombre de restaurations
  
        this.basicData2 = {
          labels: labels,
          datasets: [
            {
              label: 'Nombre de demandes de restaurations par CRE',
              backgroundColor: '#f44336',
              data: counts
            }
          ]
        };
      },
      error => {
        console.error('Erreur lors du chargement des données:', error);
      }
    );
  }
}  