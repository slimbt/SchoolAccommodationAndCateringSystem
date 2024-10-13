import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeUrl = 'http://localhost:8080/employees'
  constructor(private httpp : HttpClient) { }

  getAllEmployees() {
    return this.httpp.get<any>(this.employeeUrl+"/");
  }
  getEmployeeById(id: any) {
    return this.httpp.get(`${this.employeeUrl}/${id}`);
  }
  
  deleteEmployee(id: any) {
    return this.httpp.delete(`${this.employeeUrl}/${id}`)
  }
  updateEmployee(employee: any) {
   
    return this.httpp.put(`${this.employeeUrl}/${employee.id}`, employee);
  }
  addEmployee(employee:any){
    return this.httpp.post(this.employeeUrl,employee)
  }
  getAdminEmployees() {
    // Implémentez cette méthode pour récupérer les administrateurs depuis votre backend
    return this.httpp.get<any[]>(this.employeeUrl+"/addd");
  }

  getOnlyEmployees(){

    return this.httpp.get<any[]>(this.employeeUrl+"/adddd");

  }
  updateEmployeeCre(employeeId: any, creId: any): Observable<any> {
    return this.httpp.put<any>(`${this.employeeUrl}/${employeeId}/cre`, { "creId": creId });
  }

  getNumberOfemp(): Observable<number> {
    return this.httpp.get<number>(`${this.employeeUrl}/count`);
  }
  
}
