import { Component, OnInit } from '@angular/core';
import { CreService } from 'app/_services/cre.service';
import { EleveService } from 'app/_services/eleve.service';
import { FeedbackService } from 'app/_services/feedback.service';
import { HebergementParentService } from 'app/_services/hebergement-parent.service';
import { ParentService } from 'app/_services/parent.service';
import { RestaurationParentService } from 'app/_services/restauration-parent.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  numberOfParents: number;
  NumberOfHebergement:number;
  NumberOfRestauration:number;
  NumberOfEleve:number;
  NumberOfCre:number;
  NumberOfFeedback:number;

  constructor(private parentService: ParentService,private hService:HebergementParentService,private rService:RestaurationParentService,private eService:EleveService,private cService:CreService,private fService:FeedbackService) { }

  ngOnInit(): void {
    this.parentService.getNumberOfParents().subscribe(
      count => this.numberOfParents = count
    );
 
  this.hService.getNumberOfHebergement().subscribe(
    count => this.NumberOfHebergement = count
  );


this.rService.getNumberOfRestauration().subscribe(
  count => this.NumberOfRestauration = count
);
 
this.eService.getNumberOfEleve().subscribe(
  count => this.NumberOfEleve = count
);
this.cService.getNumberOfCre().subscribe(
  count => this.NumberOfCre = count
);

this.fService.getNumberOfFeedback().subscribe(
  count => this.NumberOfFeedback = count
);

}}