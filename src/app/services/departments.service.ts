import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  private apiUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/departments';

  constructor(private http: HttpClient) { }
  
  getDepartments(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
