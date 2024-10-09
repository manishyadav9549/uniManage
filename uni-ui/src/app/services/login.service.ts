import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';
import { School } from '../interfaces/school';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validateUser(loginData: any): Observable <School.loginForm> {
    let url = ''
    const output = new Subject<School.loginForm>();
    this.http.post(url,loginData).subscribe((data: any)=>{
      console.log("Manish data",data);
      output.next(data);
      output.complete();
    },(e: any) =>{
      output.error(e);
      output.complete();

    }
  )
    return output;
  }

}
