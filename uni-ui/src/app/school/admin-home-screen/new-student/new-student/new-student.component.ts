import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {
  studentForm!: FormGroup;
  photoError: string | null = null;
  genderOptions = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
    { label: 'Other', value: 'O' },
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

  goBack(){

    
  }
  onSubmit(){}

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
