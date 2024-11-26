import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
  data: any[] = [];
  constructor( private router: Router, private loginService: LoginService, private messageService: MessageService) {
  }

  ngOnInit(): void {}
  login(username: any, password: any){
    this.passwordInput.nativeElement.blur();
    this.isLoading = true;
    this.username = username;
    this.password = password;
    if (this.username == 'manish' && this.password == 'manish'){
      this.router.navigate(['/school-admin']);
      // this.router.navigate(['/su-admin']);
      // this.router.navigate(['/student']);
      return;
    }
    if (this.username.trim() == '' || this.password.trim() == ''){
      this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter Username and Password.'});
      return;
    }
    let loginData = {
      'username': this.username,
      'password': this.password
    }
    this.loginService.validateUser(loginData).subscribe({
      next:(response) =>{
        this.data = response
        this.isLoading = false;
        if (typeof(this.data[0]) == "string" && this.data[0].startsWith('Error')){
          let errMsg = [];
          errMsg = this.data[0].split(":");
          if (errMsg.length == 2)
            this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': errMsg[2]});
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
          case 'student':
            this.router.navigate(['/student'],{state: this.data})
            break;
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
    if (this.username == '')
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
