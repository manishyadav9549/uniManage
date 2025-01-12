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
        if (typeof(this.data[0]) == "string" && this.data[0].startsWith('Error')){
          let errMsg = [];
          errMsg = this.data[0].split(":");
          if (errMsg.length == 3)
            this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': errMsg[2]+ ". Invalid username"});
          else
            this.messageService.add({'severity': 'warn', 'summary': 'Error', 'detail': 'Something bad happened. Please try again after some time'});
          return;
        }
        else if(this.data[0] === "Password didn't matched"){
          this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': 'Incorrect Password.'});
          return;

        }
        switch (this.data[0]["role"]) {
          case 'teacher':
            this.router.navigate(['/school-admin'],{state: this.data});
            break;
          case 'admin':
            this.router.navigate(['/school-admin'],{state: this.data});
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
        this.messageService.add({'severity': 'error', 'summary': 'Error', 'detail': "Server is down please login after some time."});
      },
      complete: () => {
        console.log('Data stream completed');
      }
    });
  }

  focusPassword() {
    this.passwordInput.nativeElement.focus();
  }

  forgotPassword(){
    if (this.username == '' || this.selectedUserType == '')
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Enter Username' });
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
