import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginForm.component.html',
  styleUrls: ['./loginForm.component.css']
})
export class LoginFormComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }


  // If user is logged in, take them immediately to the admin page
  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged In');
      this.router.navigate(['/admin']); // Take user to admin page if login is successful
    }, error => {
      this.alertify.error('Unauthorised');
    });
  }

}
