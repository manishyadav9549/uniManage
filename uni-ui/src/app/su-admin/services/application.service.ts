import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { School } from './application.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  basePath: string = "http://localhost:2126";

  constructor(private http: HttpClient) { }

  addApplication(applicationData: School): Observable<any> {
    let url = this.basePath + '/uniManage/addApp'
   
    return this.http.post(url,applicationData);
  }

  getAppList():Observable<any>{
    let url = this.basePath + '/uniManage/schools'
    return this.http.get(url);
  }

  deleteApp(): Observable<any> {
    let url = this.basePath + '/uniManage/schools'
    return this.http.delete(url)
  }
}