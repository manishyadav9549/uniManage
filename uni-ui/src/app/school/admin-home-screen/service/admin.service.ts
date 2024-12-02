import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  basePath: string = "http://localhost:2126"

  constructor(private http: HttpClient) { }

  addStudent(studentInfo: any): Observable<any>{
    let url = this.basePath + '/uniManage/addStudent'; 
    return this.http.post(url,studentInfo);
  }
}
