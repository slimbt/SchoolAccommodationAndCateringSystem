import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/admin/user-profile', title: 'Ajouter Admin',  icon:'person', class: '' },
    { path: '/admin/table-list', title: 'Gestion Employés',  icon:'content_paste', class: '' },
    { path: '/admin/typography', title: 'Gestion Hébergements',  icon:'library_books', class: '' },
    { path: '/admin/icons', title: 'Gestion Restaurations',  icon:'bubble_chart', class: '' },
    { path: '/admin/maps', title: 'Gestion Parents',  icon:'people', class: '' },
    { path: '/admin/notifications', title: 'Gestion Actualités',  icon:'notifications', class: '' },
    { path: '/admin/feedb', title: 'Gestion Feedbacks',  icon:'feedback', class: '' },
 
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
