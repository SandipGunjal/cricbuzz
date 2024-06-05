import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private service: ApiServiceService, private router: Router) {}

  isLoggedIn(): boolean {
    return this.service.isLoggedIn();
  }

  logout() {
    if (confirm('Are you sure to logout user...!')) {
      this.service.logout();
      this.router.navigate(['']);
    }
  }

  // login(username:any){
  //   this.service.login(username)
  //   this.isLogin=true
  // }

  // logout() {
  //   if (confirm('Are you sure to logout user...!')) {
  //     this.service.logout();
  //     this.router.navigate(['']);
  //     this.isLogin=false
  //   }
  // }

  
}
