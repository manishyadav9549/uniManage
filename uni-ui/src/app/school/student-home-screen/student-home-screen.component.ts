import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-home-screen',
  templateUrl: './student-home-screen.component.html',
  styleUrls: ['./student-home-screen.component.scss']
})
export class StudentHomeScreenComponent implements OnInit {
  schoolName: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.schoolName = "Woodland Academy"

  }

 

  goToGrades() {
    this.router.navigate(['/grades']);
  }

  goToAttendance() {
    this.router.navigate(['/attendance']);
  }

  goToProfile() {
    this.router.navigate(['/courses']);
  }

  goToCalendar() {
    this.router.navigate(['/settings']);
  }

  onLogout(){
    this.router.navigate(['']);
  }
}
