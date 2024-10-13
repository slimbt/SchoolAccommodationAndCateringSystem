import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ImageService } from 'app/_services/image.service';
import { ParentService } from 'app/_services/parent.service';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {



  constructor(private eService: ParentService, private imageService: ImageService,private router:Router,private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    
  
    
  }


}