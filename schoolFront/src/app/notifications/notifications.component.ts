import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService } from 'app/_services/image.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  imageForm: FormGroup;
  imageFile: File | null = null;
  thumbnailFile: File | null = null;
  images: any[] = [];

  constructor(private imageService: ImageService, private fb: FormBuilder) {  
    this.imageForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageFile: ['', Validators.required],
      thumbnailFile: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.imageForm.valueChanges.subscribe(val => {
      console.log('Form changes:', val);
    });
    this.loadImages();
  }

  onFileChange(event: any, isThumbnail: boolean): void {
    const file = event.target.files[0];
    console.log('File selected:', file, 'Is thumbnail:', isThumbnail);
    if (isThumbnail) {
        this.thumbnailFile = file;
        this.imageForm.patchValue({ thumbnailFile: file.name });
    } else {
        this.imageFile = file;
        this.imageForm.patchValue({ imageFile: file.name });
    }
  
    // Mettre à jour le libellé du fichier
    const fileName = file ? file.name : 'Choisissez un fichier...';
    const labelElement = event.target.nextElementSibling;
    if (labelElement) {
        labelElement.textContent = fileName;
    }
  }
  

  onSubmit(): void {
    console.log('Formulaire soumis', this.imageForm.value);
    if (this.imageForm.valid && this.imageFile && this.thumbnailFile) {
      const formData = new FormData();
      formData.append('title', this.imageForm.get('title')?.value);
      formData.append('description', this.imageForm.get('description')?.value);
      formData.append('imageFile', this.imageFile);
      formData.append('thumbnailFile', this.thumbnailFile);

      this.imageService.addImage(formData).subscribe(
        response => {
          console.log('Image ajoutée avec succès', response);
          alert('Image ajoutée avec succès');
          this.imageForm.reset();
          this.imageFile = null;
          this.thumbnailFile = null;
          this.loadImages();  // Reload images after adding a new one
        },
        error => {
          console.error('Erreur lors de l\'ajout de l\'image', error);
          alert('Erreur lors de l\'ajout de l\'image');
        }
      );
    } else {
      console.log('Formulaire invalide ou fichiers non sélectionnés');
      if (!this.imageFile) {
        console.error('Image file not selected');
      }
      if (!this.thumbnailFile) {
        console.error('Thumbnail file not selected');
      }
      if (!this.imageForm.valid) {
        console.error('Formulaire invalide', this.imageForm.errors);
      }
    }
  }

  loadImages(): void {
    this.imageService.getImages().subscribe(data => {
      this.images = data.map(item => {
        return {
          id: item.id,
          title: item.title,
          description: item.description,
          createdAt: item.createdAt,
          itemImageSrc: 'assets/actualités/' + item.itemImageSrc,
          thumbnailImageSrc: 'assets/actualités/' + item.thumbnailImageSrc,
          isEdit: false
        };
      });
  
      // Trier les images par date de création
      this.images.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    });
  }
  

  onEdit(image: any): void {
    image.isEdit = true;
  }

  confirmDeleteImage(imageId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette image ?')) {
      this.imageService.deleteImage(imageId).subscribe(
        response => {
          console.log('Image supprimée avec succès', response);
          this.loadImages();
        },
        error => {
          console.error('Erreur lors de la suppression de l\'image', error);
        }
      );
    }
  }

  onUpdate(image: any): void {
    const formData = new FormData();
    formData.append('title', image.title);
    formData.append('description', image.description);

    if (image.newItemImageFile) {
      formData.append('imageFile', image.newItemImageFile);
    }

    if (image.newThumbnailImageFile) {
      formData.append('thumbnailFile', image.newThumbnailImageFile);
    }

    this.imageService.updateImage(image.id, formData).subscribe(
      response => {
        console.log('Image mise à jour avec succès', response);
        image.isEdit = false;
        this.loadImagesAndSort(); // Charge les images et les trie après la mise à jour
      },
      error => {
        console.error('Erreur lors de la mise à jour de l\'image', error);
      }
    );
  }

  loadImagesAndSort(): void {
    this.imageService.getImages().subscribe(data => {
      this.images = data.map(item => {
        return {
          id: item.id,
          title: item.title,
          description: item.description,
          createdAt: item.createdAt,
          itemImageSrc: 'assets/actualités/' + item.itemImageSrc,
          thumbnailImageSrc: 'assets/actualités/' + item.thumbnailImageSrc,
          isEdit: false
        };
      });

      // Trier les images par date de création
      this.images.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    });
  }

  onCancel(image: any): void {
    image.isEdit = false;
    this.loadImages();
  }

  onImageChange(event: any, image: any): void {
    const file = event.target.files[0];
    image.newItemImageFile = file;
    image.newItemImageSrc = URL.createObjectURL(file);
  }

  onThumbnailChange(event: any, image: any): void {
    const file = event.target.files[0];
    image.newThumbnailImageFile = file;
    image.newThumbnailImageSrc = URL.createObjectURL(file);
  }
}
