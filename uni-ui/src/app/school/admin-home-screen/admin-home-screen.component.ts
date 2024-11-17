import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { UtilService } from 'src/app/school/util/util.service';

@Component({
  selector: 'app-admin-home-screen',
  templateUrl: './admin-home-screen.component.html',
  styleUrls: ['./admin-home-screen.component.scss']
})
export class AdminHomeScreenComponent implements OnInit {
  schoolName: string = 'School'
  schoolInfo: any;
  showOptions = false;
  menuItems = [
    {
      label: 'School',
      icon: 'pi pi-building',
      // command: () => this.setType('school')
    },
    {
      label: 'Hospital',
      icon: 'pi pi-heart',
      // command: () => this.setType('hospital')
    },
    {
      label: 'Restaurant',
      icon: 'pi pi-hashtag',
      // command: () => this.setType('restaurant')
    }
  ];

  constructor(protected util: UtilService, private router: Router) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.schoolInfo = history.state;
    this.schoolName = this.schoolInfo.name;
    console.log("School info: ", this.schoolInfo);
    this.initializeEnrollmentChart();
    this.initializePerformanceChart();
  }

  studentMenuItems = [
    {
      label: 'Add New Student',
      icon: 'pi pi-plus',
      command: () => this.addNewStudent()
    },
    {
      label: 'Delete Student',
      icon: 'pi pi-trash',
      command: () => this.deleteStudent()
    },
    {
      label: 'Edit Student',
      icon: 'pi pi-pencil',
      command: () => this.editStudent()
    }
  ];

  toggleDropdown() {
    this.showOptions = !this.showOptions;
  }

  addNewStudent() {
    console.log('Add New Student');
    this.router.navigate(["/newStudent"]);
    
  }

  deleteStudent() {
    console.log('Delete Student');
    // Your logic here
  }

  editStudent() {
    console.log('Edit Student');
    // Your logic here
  }

  initializeEnrollmentChart() {
    new Chart('enrollmentChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Enrollments',
          data: [10, 15, 20, 25, 30],
          borderColor: 'blue',
          fill: false,
        }]
      }
    });
  }

  initializePerformanceChart() {
    new Chart('performanceChart', {
      type: 'bar',
      data: {
        labels: ['Math', 'Science', 'English', 'History', 'Art'],
        datasets: [{
          label: 'Average Scores',
          data: [75, 80, 85, 90, 70],
          backgroundColor: 'orange',
        }]
      }
    });
  }

  manageStudents() {
    console.log('Navigating to Manage Students page...');
    // Route to Manage Students Component
  }

  manageTeachers() {
    console.log('Navigating to Manage Teachers page...');
    // Route to Manage Teachers Component
  }

  manageClasses() {
    console.log('Navigating to Manage Classes page...');
    // Route to Manage Classes Component
  }

  viewReports() {
    console.log('Navigating to Reports page...');
    // Route to Reports Component
  }

  pushNotifications() {
    console.log('Navigating to Push Notifications page...');
    // Trigger the Push Notification feature
  }

  academicCalendar() {
    console.log('Navigating to Academic Calendar...');
    // Route to Academic Calendar Component
  }

  feeStatus() {
    console.log('Navigating to Fee Status page...');
    // Route to Fee Status Component
  }

  smsBroadcast() {
    console.log('Navigating to SMS Broadcast Service...');
    // Trigger the SMS Broadcast Service
  }


}
