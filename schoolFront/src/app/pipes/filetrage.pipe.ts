import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filetrage'
})
export class FiletragePipe implements PipeTransform {

  transform(objs: any[], term: any): any[] {
    if (!term || term.trim() === '') {
      return objs; // Retourner tous les objets si le terme de recherche est vide ou non défini
    } else {
      const searchTerm = term.toString().toLowerCase().trim(); // Convertir le terme de recherche en minuscules et le nettoyer
      return objs.filter((obj: any) => {
        return this.isMatch(obj, searchTerm);
      });
    }
  }

  private isMatch(obj: any, term: string): boolean {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (this.isSearchable(value) && this.includesTerm(value, term)) {
          return true;
        }
      }
    }
    return false;
  }

  private isSearchable(value: any): boolean {
    return typeof value === 'string' || typeof value === 'number';
  }

  private includesTerm(value: any, term: string): boolean {
    if (typeof value === 'string') {
      return value.toLowerCase().includes(term);
    } else if (typeof value === 'number') {
      return value.toString().toLowerCase().includes(term);
    }
    return false;
  }

}
