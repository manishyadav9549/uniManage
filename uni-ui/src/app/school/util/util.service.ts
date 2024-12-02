import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private router: Router) { }

  logout(){
    this.router.navigate(['']);
  }

  getFormattedDate() {
    const date = new Date();
    
    // Extract day, month, and year
    const day = date.getDate();
    const year = date.getFullYear();
    
    // Get month in short form
    const month = date.toLocaleString('en-US', { month: 'short' });
    
    // Function to get the ordinal suffix for the day
    const getOrdinalSuffix = (day: number) => {
      if (day > 3 && day < 21) return 'th'; // 4th-20th are 'th'
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
  
    // Format day with ordinal suffix
    const formattedDay = `${day}${getOrdinalSuffix(day)}`;
  
    // Combine all parts
    return `${formattedDay} ${month} ${year}`;
  }

  base64Encoder(value: string){
    return btoa(value);
  }
}
