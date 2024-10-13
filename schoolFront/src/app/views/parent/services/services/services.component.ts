import { Component, OnInit, ViewChild } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { ServicesCarouselItemModel } from '../../../../models/services-carousel-item.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  items : ServicesCarouselItemModel[]= [];


  constructor() { }

  // Définir une fonction pour tronquer le texte à une longueur fixe
truncateText(text: string, maxLength: number): string {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...'; // Ajouter des points de suspension pour indiquer le texte tronqué
  }
  return text;
}


ngOnInit(): void {
  
  let item1 = new ServicesCarouselItemModel();
  item1.title = 'Service hébergement';
  item1.description = this.truncateText('Notre service hébergement scolaire offre un environnement sûr et accueillant pour les étudiants, avec des installations modernes et des chambres confortables. Nous nous engageons à fournir une expérience résidentielle de qualité, favorisant le bien-être et la réussite académique de chaque élève.', 200); // Limiter la description à 150 caractères
  item1.image = 'assets/assets/images/maison.png';



    let item2 = new ServicesCarouselItemModel ();
    item2.title= ' Service restauration';
    item2.description= this.truncateText('Notre service de restauration scolaire propose des repas équilibrés et nutritifs, adaptés aux besoins alimentaires des étudiants. Nous mettons l accent sur la qualité des ingrédients, la variété des plats et le respect des normes hygiène pour garantir une expérience culinaire saine et savoureuse.',200);
    item2.image= 'assets/assets/images/restaurant.png';
  

    let item3 = new ServicesCarouselItemModel ();
    item3.title= 'Paiement en ligne';
    item3.description=this.truncateText('Notre système de paiement en ligne offre une solution sécurisée et pratique pour régler les frais de scolarité et les services supplémentaires. Avec des options de paiement flexibles et un processus simple, les parents peuvent effectuer des transactions en toute tranquillité, améliorant ainsi l efficacité et la transparence des transactions financières liées à l éducation.',200);
    item3.image= 'assets/assets/images/payer.png';
   

    let item4 = new ServicesCarouselItemModel ();
    item4.title= ' suivi des demandes';
    item4.description=this.truncateText('Notre plateforme de suivi des demandes permet aux parents et aux élèves de suivre en temps réel l état de leurs demandes, qu il s agisse d inscription, de demandes de renseignements ou de services supplémentaires. Grâce à des notifications instantanées et à un suivi transparent, nous garantissons une communication efficace et une expérience client optimale tout au long du processus.',200);
    item4.image= 'assets/assets/images/suivi.png';
   

    let item5 = new ServicesCarouselItemModel ();
    item5.title= ' suivi des actualités ';
    item5.description=this.truncateText('Notre service de suivi des actualités vous tient informé(e) des dernières nouvelles et événements au sein de notre établissement scolaire. Que ce soit des annonces importantes, des activités éducatives, ou des réussites de nos élèves, notre plateforme vous permet de rester connecté(e) et informé(e) de manière régulière, favorisant ainsi une communication dynamique et transparente avec notre communauté scolaire.',200);
    item5.image= 'assets/assets/images/news.png';
 

    this.items.push(item1);
    this.items.push(item2);
    this.items.push(item3);
    this.items.push(item4);
    this.items.push(item5);

  }

}
