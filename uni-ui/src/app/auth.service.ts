import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    // Replace this with real authentication logic
    return !!localStorage.getItem('authToken');
  }
}
