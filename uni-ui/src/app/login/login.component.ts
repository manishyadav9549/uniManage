import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { School } from '../interfaces/school';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('passwordInput')
  passwordInput!: ElementRef;
  visible: boolean = true;
  errorMessage: string = 'Invalid Credentials'
  username: any = '';
  password: any ='';
  showPassword: boolean = false;
  isLoading : boolean = false;
  selectedUserType : any = '';
  userType: any[] =[
    { label:"School", value: "school"},
    { label: 'Hospital', value: 'hospital' },
    { label: 'Restaurant', value: 'restaurant'}
  ];
  data: any;
  constructor( private router: Router, private loginService: LoginService, private messageService: MessageService) {
  }

  ngOnInit(): void {}
  login(username: any, password: any){
    this.passwordInput.nativeElement.blur();
    this.isLoading = true;
    this.username = username;
    this.password = password;
    if (this.username == '' || this.password == '' || this.selectedUserType )
    {}
    let loginData = {
      'username': this.username,
      'password': this.password
    }
    // this.httpLogin.validateUser(loginData).subscribe((state: School.loginForm) =>{
      // if(state.data){
      //   console.log(state.data);
      //   this.isLoading = false;
      // }

    this.loginService.validateUser(loginData).subscribe({
      next:(response) =>{
        this.data = response
        this.isLoading = false;
        switch (this.data.userType) {
          case 'school':
            if (isNaN(this.username))
              this.router.navigate(['/school-admin']);
            else
             this.router.navigate(['/student']);
            break;
          case 'hospital':
            this.router.navigate(['/hospital']);
            break;
          case 'restaurant':
            this.router.navigate(['/restaurant'])
        }
      },
      error: (error) => {
        console.error('Error fetching data: ', error);
      },
      complete: () => {
        console.log('Data stream completed');
      }
    });
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1000);

      
    // });
      
  }

  focusPassword() {
    this.passwordInput.nativeElement.focus();
  }

  forgotPassword(){
    if (this.username == '' || this.selectedUserType == '')
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Enter Username and select user type' });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  
  showDialog(){
    this.visible = !this.visible;
  }
  Login(){
  }

}
