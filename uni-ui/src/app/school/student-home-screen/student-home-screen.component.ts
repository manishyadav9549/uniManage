import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './service/student.service';
import { state } from '@angular/animations';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { UtilService } from 'src/app/school/util/util.service';

@Component({
  selector: 'app-student-home-screen',
  templateUrl: './student-home-screen.component.html',
  styleUrls: ['./student-home-screen.component.scss']
})
export class StudentHomeScreenComponent implements OnInit {
  schoolName: string = 'WoodLand';
  @ViewChild('menu') menu: any;
  menuItems: MenuItem[];
  currentDate: string = "";
  notifications = [
    { text: 'On 15th August, School will start from 9AM', priority: 'high' },
    { text: 'Tomorrow will be a holiday', priority: 'low' },
    // Add more notifications with appropriate priorities
  ];

  events = [
    { text: 'Midterm Exam', date: '10th Oct 2024' },
    { text: 'Science Fair', date: '20th Oct 2024' },
    // Add more events as needed
  ];

  attendence: String= "0%"
  date: Date = new Date();
  visible: boolean = false;
  toggleMenu(event: Event) {
    this.menu.toggle(event);
  }
  studentInfo: any;
  studentData: any;

  constructor(private router: Router, private http: StudentService, private util: UtilService) {
    this.menuItems = [
      // { label: 'Grades', icon: 'pi pi-book', command: () => this.goToGrades() },
      // { label: 'Attendance', icon: 'pi pi-calendar-clock', command: () => this.goToAttendance() },
      { label: 'Profile', icon: 'pi pi-user', command: () => this.goToProfile() },
      { label: 'Calendar', icon: 'pi pi-calendar', command: () => this.goToCalendar() },
      { label: 'Raise Query', icon: 'pi pi-comment', command: () => this.raiseQuery()},
      { label: 'Online Class', icon: 'pi pi-desktop', command: () => this.raiseQuery()},
      { label: 'Log Out', icon: 'pi pi-sign-out', command: () => this.util.logout() }
    ];
   }
  
  ngOnInit(): void {
    this.currentDate = this.util.getFormattedDate();
    this.studentInfo = history.state[0];
    console.log("studentInfo", this.studentInfo)
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

  raiseQuery(): void {
    throw new Error('Method not implemented.');
  }

  goToGrades() {
    this.router.navigate(['/grades']);
  }

  goToAttendance() {
    this.router.navigate(['/attendance']);
  }

  goToProfile() {
    this.router.navigate(['/s-profile']);
  }

  goToCalendar() {
    this.router.navigate(['/calendar']);
  }

  goToTimeTable(role: string){
    this.router.navigate(['/time-table'], {state: this.studentInfo.role})
  }

  onLogout(){
    this.router.navigate(['']);
  }
}
