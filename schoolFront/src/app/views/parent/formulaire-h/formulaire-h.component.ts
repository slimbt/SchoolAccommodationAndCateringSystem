import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'formulaire-h',
  templateUrl: './formulaire-h.component.html',
  styleUrls: ['./formulaire-h.component.css']
})
export class FormulaireHComponent implements OnInit {
  datedebut: string;
  datefin: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.datedebut = params['datedebut'];
      this.datefin = params['datefin'];
    });
  }
}