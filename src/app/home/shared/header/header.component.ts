import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {



  user: firebase.User;

  constructor(private auth: AuthService, 
    private router: Router) { }

  // ngOnInit() {
  //   this.getUserState()
  //     .subscribe( user => {
  //       this.user = user;
  //     })
  // }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.auth.logout();
  }

  register() {
    this.router.navigate(['/register']);
  }


}
