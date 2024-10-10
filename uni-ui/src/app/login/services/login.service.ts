import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';
import { School } from 'src/app/interfaces/school';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  basePath: string = "localhost:8081"

  constructor(private http: HttpClient) { }

  validateUser(loginData: any): Observable<any> {
    let url = 'http://localhost:8081/uniLogin/user'
   
    return this.http.post(url,loginData);
    }

}
