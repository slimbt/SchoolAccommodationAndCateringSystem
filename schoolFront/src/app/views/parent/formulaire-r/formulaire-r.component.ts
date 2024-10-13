import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'formulaire-r',
  templateUrl: './formulaire-r.component.html',
  styleUrls: ['./formulaire-r.component.css']
})
export class FormulaireRComponent implements OnInit {
  datedebut: string;
  datefin: string;
  offres = [
    {
      nom: 'Trimestre',
      prix: '30',
      image: 'assets/assets/images/r1.png',
      datedebut: '04 septembre 2024',
      datefin: '23 décembre 2024',
      menu: ' de Lundi à Vendredi : Petit-déjeuner : Pain,beurre, confiture,yaourt, oeuf/ Déjeuner : Salade composée (tomates, concombres, maïs), plat principale ( selon la disponibilité), fruit de saison / Dîner : Soupe de légumes, poulet ou viande ou poisson ,salade verte, fruit de saison ',
      showDescription: false
    },
    {
      nom: 'Semestre',
      prix: '45',
      image: 'assets/assets/images/r2.png',
      datedebut: '04 septembre 2024',
      datefin: '20 avil 2025',
      menu: ' de Lundi à Vendredi : Petit-déjeuner : Pain,beurre, confiture,yaourt, oeuf/ Déjeuner : Salade composée (tomates, concombres, maïs), plat principale ( selon la disponibilité), fruit de saison / Dîner : Soupe de légumes, poulet ou viande ou poisson ,salade verte, fruit de saison ',
      showDescription: false
    },
    {
      nom: 'Année',
      prix: '60',
      image: 'assets/assets/images/r3.png',
      datedebut: '04 septembre 2024',
      datefin: '06 mai 2025',
      menu: ' de Lundi à Vendredi : Petit-déjeuner : Pain,beurre, confiture,yaourt, oeuf/ Déjeuner : Salade composée (tomates, concombres, maïs), plat principale ( selon la disponibilité), fruit de saison / Dîner : Soupe de légumes, poulet ou viande ou poisson ,salade verte, fruit de saison ',
      showDescription: false
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.datedebut = params['datedebut'];
      this.datefin = params['datefin'];
    });
  }

  toggleDescription(offre): void {
    offre.showDescription = !offre.showDescription;
  }
}
