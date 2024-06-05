import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // isLogin:boolean=false
  username:string=""
  password:string=""

  constructor(private router:Router , private loginService:ApiServiceService){}

  onLogin(){
    console.log(this.username);
    console.log(this.password);  
    if(this.username === "sandip" && this.password === "sandip123"){
      this.loginService.login()
      this.router.navigate(['matches'])
      alert("Login Successfully...!")
      // this.isLogin=false
    }else{
      alert("User Not Found.? Please correct username and password")
    }
  }

}
