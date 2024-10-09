import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home-screen',
  templateUrl: './admin-home-screen.component.html',
  styleUrls: ['./admin-home-screen.component.scss']
})
export class AdminHomeScreenComponent implements OnInit {
  schoolName: string = 'School'

  constructor() { }

  ngOnInit(): void {
    
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
