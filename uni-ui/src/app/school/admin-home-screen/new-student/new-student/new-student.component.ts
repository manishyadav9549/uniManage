import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {
  studentForm!: FormGroup;
  addSiblings: boolean = false;
  photoError: string | null = null;
  siblingId: string = '';
  genderOptions = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
    { label: 'Other', value: 'O' },
  ];

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.studentForm = this.fb.group({
      class_id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      roll_number: ['', [Validators.required]],
      date_of_birth: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      guardian_name: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
    
  }

  goBack(){  
  }
  onSubmit(){
      let studentInfo = this.studentForm.value;
      console.log(studentInfo);
      if (studentInfo.name == null || studentInfo.name == '' || studentInfo.name == undefined)
        this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter Student\'s Name'});
      if (studentInfo.address == null || studentInfo.address == '' || studentInfo.address == undefined)
        this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter Student\'s Address'});
      if (studentInfo.class_id == null || studentInfo.class_id == '0' || studentInfo.class_id == undefined || studentInfo.class_id <=0 )
        this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter Valid Class'});
      if (studentInfo.name == null || studentInfo.date_of_birth == '' || studentInfo.date_of_birth == undefined)
        this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter Student\'s DOB'});
      if (studentInfo.name == null || studentInfo.name == '' || studentInfo.name == undefined)
        this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter Students Email'});
      if (studentInfo.name == null || studentInfo.gender == '' || studentInfo.gender == undefined)
        this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Select Student\'s Name'});
      if (studentInfo.name == null || studentInfo.phone == '' || studentInfo.phone == undefined)
        this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter Student\s phone'});
      if (studentInfo.name == null || studentInfo.name == '' || studentInfo.name == undefined)
        this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter Students Name'});
      if (studentInfo.name == null || studentInfo.name == '' || studentInfo.name == undefined)
        this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter Students Name'});
  }

  onPhotoUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 50 * 1024) {
        this.photoError = 'Photo size must be less than 50 KB.';
        this.studentForm.patchValue({ photo: null });
      } else {
        this.photoError = null;
        this.studentForm.patchValue({ photo: file });
      }
    }
  }
}
