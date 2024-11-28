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
    let url = this.basePath + '/uniManage/school'; 
    return this.http.post(url,id);
    }

    private role: 'admin' | 'student' = 'admin'; // Change to 'student' for testing the student view

  setRole(role: 'admin' | 'student') {
    this.role = role;
  }

  getRole(): 'admin' | 'student' {
    return this.role;
  }

}
