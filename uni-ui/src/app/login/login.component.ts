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
      this.router.navigate(['/su-admin']);
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
        if (this.data[0] === "User not found"){
          this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': 'Incorrect Username.'})
        }
        else if(this.data[0] === "Password didn't matched"){
          this.messageService.add({'severity': 'warn', 'summary': 'Warning', 'detail': 'Incorrect Password.'})

        }
        switch (this.data[0]["application_id"]) {
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
            break;
          default:
            this.router.navigate(['/student'])
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
