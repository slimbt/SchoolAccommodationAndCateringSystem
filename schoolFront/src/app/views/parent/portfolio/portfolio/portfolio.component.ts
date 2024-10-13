import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { GalleriaModule } from 'primeng/galleria';

import { ImageService } from 'app/_services/image.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  images: any[] = [];
  responsiveOptions: any;

  constructor(private imageService: ImageService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.imageService.getImages().subscribe(data => {
      this.images = data.map(item => {
        return {
          title: item.title,
          description: item.description,
          createdAt: item.createdAt,
          itemImageSrc: 'assets/actualités/' + item.itemImageSrc,
          thumbnailImageSrc: 'assets/actualités/' + item.thumbnailImageSrc
        };
      });
  
      // Tri des images par date de création
      this.images.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    });
  }
     
  
}