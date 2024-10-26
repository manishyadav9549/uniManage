import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { School } from './applicationModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  basePath: string = "http://localhost:2126";

  constructor(private http: HttpClient) { }

  addApplication(applicationData: School): Observable<any> {
    let url = this.basePath + '/uniLogin/addApp'
   
    return this.http.post(url,applicationData);
  }
}
