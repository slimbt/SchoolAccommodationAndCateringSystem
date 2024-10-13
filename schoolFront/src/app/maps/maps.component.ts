import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/_services/auth.service';
import { EleveService } from 'app/_services/eleve.service';
import { ParentService } from 'app/_services/parent.service';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

    ajoutParentForm: FormGroup;

    form:any ={}
      parents: any = [];
      term: any;
      id: any;
      Parent: any = {};
      parentForm: any = {
       
        nom: null,
        prenom: null,
        cin: null,
        profession: null,
        adresse:null,
        telephone: null
        
      };
      isSuccessful = false;
      isSignUpFailed = false;
      errorMessage = '';
      photoPath:any;
  imageUrl: string;
  selectedPhoto: File | null = null;
      constructor(private activatedRoute: ActivatedRoute, private eService: ParentService, private authService: AuthService, private formBuilder: FormBuilder,private eleveService:EleveService,private renderer: Renderer2) {
        this.ajoutParentForm = this.formBuilder.group({
          username: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
          nom: ['', Validators.required],
          prenom: ['', Validators.required],
          cin: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
          profession: ['', Validators.required],
          adresse: ['', Validators.required],
          telephone: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]]
        });
      }
    
      ngOnInit(): void {
    
    
        if (this.parents.length === 0) {
          this.getAllParent();
        }
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        if (this.id != null && this.id != undefined) {
          this.getParentById(this.id);
        }
      }
    
      getAllParent() {
        this.eService.getAllParent().subscribe(
          (response: any) => {
            this.parents = response;
            this.sortEmployeesByCreatedAt();
            console.log("data for get all parents", response);
          }
        );
      }
    
      deleteParent(id: any) {
        // Récupérer les élèves associés à ce parent par son ID
        this.eleveService.getAllEleve(id).subscribe(
          (eleves: any[]) => {
            // Supprimer chaque élève
            const deleteElevesPromises = eleves.map(eleve =>
              this.eleveService.deleteEleve(eleve.id).toPromise()
            );
            Promise.all(deleteElevesPromises)
              .then(() => {
                // Après avoir supprimé tous les élèves, supprimer le parent
                this.eService.deleteParent(id).subscribe(
                  (response) => {
                    console.log("Service response", response);
                    this.getAllParent();
                  },
                  (error) => {
                    console.error("Error deleting parent", error);
                  }
                );
              })
              .catch(error => {
                console.error("Error deleting students", error);
              });
          },
          (error) => {
            console.error("Error fetching students by parent ID", error);
          }
        );
      }
      
    
      confirmDeleteParent(id: any) {
        if (confirm("Êtes-vous sûr de vouloir supprimer cet employé ?")) {
          this.deleteParent(id);
        }
      }
    
      getParentById(id: any) {
        this.eService. getParentById(id).subscribe(
          (parent: any) => {
            this.Parent = parent;
          },
          (error) => {
            console.error("Error fetching employee by ID", error);
          }
        );
      }


      sortEmployeesByCreatedAt() {
        this.parents.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      }
      onPhotoChange(event: any, fileLabel: HTMLElement) {
        this.selectedPhoto = event.target.files[0]; // Get the first selected file
        if (this.selectedPhoto) {
          this.photoPath = this.selectedPhoto.name;
          // Update the span text
          this.renderer.setProperty(fileLabel, 'textContent', this.photoPath);
        } else {
          // Reset to default if no file is selected
          this.renderer.setProperty(fileLabel, 'textContent', 'Choisissez un fichier...');
        }
      }
      resetFileInput() {
        const fileInput = document.getElementById('imageFile') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
          const fileLabel = document.querySelector('.file-label') as HTMLElement;
          this.renderer.setProperty(fileLabel, 'textContent', 'Choisissez un fichier...');
        }}
    addParent() {
      const { username, email, password, nom, prenom, cin, profession, adresse, telephone } = this.parentForm;
     
     
      const role = ['user'];
      this.authService.register(username, email, password, role, nom, prenom, cin, '', profession, adresse, telephone, this.photoPath).subscribe(
          (userResponse) => {
            
              console.log('Utilisateur enregistré avec succès!', userResponse);
              this.getAllParent();
              this.parentForm = {};
              
    this.resetFileInput();
            
          },
          (error) => {
              console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
          }
      );
  }
  

      
    
      onEdit(parent: any) {
        parent.isEdit = true;
      }
    
      onUpdate(parent: any) {
        this.eService.updateParent(parent).subscribe(
          (response) => {
            console.log("Service response", response);
            parent.isEdit = false;
            this.sortEmployeesByCreatedAt();
          },
          (error) => {
            console.error("Error updating parent", error);
          }
        );
      }
    
      onCancel(parent: any) {
        parent.isEdit = false;
      }
    
      validateEmail() {
        this.ajoutParentForm.controls['email'].markAsTouched();
    }
    
    }