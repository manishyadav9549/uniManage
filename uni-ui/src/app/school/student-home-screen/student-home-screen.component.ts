import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './service/student.service';
import { state } from '@angular/animations';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-student-home-screen',
  templateUrl: './student-home-screen.component.html',
  styleUrls: ['./student-home-screen.component.scss']
})
export class StudentHomeScreenComponent implements OnInit {
  schoolName: string = 'WoodLand';
  @ViewChild('menu') menu: any;
  menuItems: MenuItem[];

  toggleMenu(event: Event) {
    this.menu.toggle(event);
  }
  studentInfo: any;
  studentData: any;

  constructor(private router: Router, private http: StudentService) {
    this.menuItems = [
      { label: 'Grades', icon: 'pi pi-book', command: () => this.goToGrades() },
      { label: 'Attendance', icon: 'pi pi-calendar-clock', command: () => this.goToAttendance() },
      { label: 'Profile', icon: 'pi pi-user', command: () => this.goToProfile() },
      { label: 'Calendar', icon: 'pi pi-calendar', command: () => this.goToCalendar() }
    ];
   }

  ngOnInit(): void {
    this.studentInfo = history.state[0];
    // this.http.getSchool(this.studentInfo.school_id).subscribe({
    //   next:(response) =>{
    //     this.studentData = response;
    //     console.log("this.studentData: ", this.studentData)
    //   },
    //   error: (error) => {
    //     console.error('Error fetching data: ', error);
    //   },
    //   complete: () => {
    //     console.log('Data stream completed');
    //   }
    // })
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
