import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  basePath: string = "http://localhost:2126"

  constructor(private http: HttpClient) { }

  getSchool(id: string): Observable<any> {
    let url = this.basePath + '/uniManage/student/S2005SLM1655'; 
    console.log(url);
    return this.http.get(url);
    }

}
