import { Component, OnInit } from '@angular/core';
import { Student } from './service/studentProfile.model';

@Component({
  selector: 'app-s-profile',
  templateUrl: './s-profile.component.html',
  styleUrls: ['./s-profile.component.scss']
})
export class SProfileComponent implements OnInit {
  student: Student = {
    roll_number: '1',
    name: 'John Doe',
    // age: 16,
    grade: '10th Grade',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '123 Elm Street, Springfield',
    guardianName: 'Jane Doe',
    guardianContact: '+0987654321',
    photoUrl: "assets/logos/WALogo.jpge",
    class_id: 0,
    gender: '',
    siblings_id: '',
    dob: new Date()
  };

  constructor() { }

  ngOnInit(): void {
  }

}
