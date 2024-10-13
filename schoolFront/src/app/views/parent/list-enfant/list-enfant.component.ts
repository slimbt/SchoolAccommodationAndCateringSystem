import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EleveService } from 'app/_services/eleve.service';
import { ImageService } from 'app/_services/image.service';
import { ParentService } from 'app/_services/parent.service';

@Component({
  selector: 'list-enfant',
  templateUrl: './list-enfant.component.html',
  styleUrls: ['./list-enfant.component.css']
})
export class ListEnfantComponent implements OnInit {

eleves : any = [] ;
id :any ;
Eleve: any = {};
selectedEleve: any = {};
parentInfo: any = {};

images: any[] = [];
showDescription: boolean = false;

  constructor(private activatedRoute:ActivatedRoute,   private router: Router, private eService : EleveService , private pService:ParentService,private imageService: ImageService) { }

  ngOnInit(): void {
    this.loadImages();
      const authUser = sessionStorage.getItem('auth-user');
      if (authUser) {
        const user = JSON.parse(authUser);
        const parentId = user.id;
        console.log('Parent ID:', parentId);
    
        this.pService.getParentById(parentId).subscribe(
          (data) => {
            this.parentInfo = data;
            console.log("iidd mta lparent",this.parentInfo.id)
            this.getAllEleve(this.parentInfo.id);
          },
          (error) => {
            console.error('Failed to fetch parent information:', error);
          }
        );
      } else {
        console.log('No user information found in session storage.');
      }
    
        



    // if (this.eleves.length === 0) {
    // }
    // this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // if (this.id != null && this.id != undefined) {
    //   this.getEleveById(this.id);
    // }

  }
  navigateToParent(): void {
    this.router.navigate(['/parent']);
}

getAllEleve(idParent) {
  this.eService.getAllEleve(idParent).subscribe(
    (response: any) => {
      this.eleves = response;
      console.log("data for get all employees", response);
      console.log(this.eleves);

    }   
  );
}

getEleveById(id: any) {
  this.eService.getEleveById(id).subscribe(
    (eleve: any) => {
      this.Eleve = eleve;
    },
    (error) => {
      console.error("Error fetching eleve by ID", error);
    }
  );
}


deleteEleve(id: any) {
  this.eService.deleteEleve(id).subscribe(
    (response) => {
      console.log("service", response);
      this.getAllEleve(this.parentInfo.id);
    }
  );
}

confirmDeleteEleve(id: any) {
  if (confirm("Êtes-vous sûr de vouloir supprimer cet eleve ?")) {
    this.deleteEleve(id);
  }
}




showDetails(eleve: any): void {
  this.selectedEleve = eleve;
  // Afficher le modal
  const modal = document.getElementById('detailsModal');
  if (modal) {
    modal.classList.add('show');
  }
}

closeModal(): void {
  this.selectedEleve = {}; // Réinitialiser les données de l'élève sélectionné
  // Fermer le modal
  const modal = document.getElementById('detailsModal');
  if (modal) {
    modal.classList.remove('show');
  }
}

loadImages(): void {
  this.imageService.getImages().subscribe(data => {
    // Trier les images par date de création (du plus récent au plus ancien)
    data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    // Sélectionner les trois dernières images
    const latestImages = data.slice(0, 3);

    // Convertir les données et les assigner à la variable images
    this.images = latestImages.map(item => {
      return {
        title: item.title,
        description: item.description,
        createdAt: item.createdAt,
        itemImageSrc: 'assets/actualités/' + item.itemImageSrc,
        thumbnailImageSrc: 'assets/actualités/' + item.thumbnailImageSrc
      };
    });
  });
}
}


