import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { NotificationService } from '../_services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginForm.component.html',
  styleUrls: ['./loginForm.component.css']
})
export class LoginFormComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private toastr: NotificationService, private router: Router) { }


  // If user is logged in, take them immediately to the admin page
  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

  // Calls authService to log in, defines behaviour for success and failure
  login() {
    this.authService.login(this.model).subscribe(next => {
      this.toastr.success('Logged In');
      this.router.navigate(['/admin']); // Take user to admin page if login is successful
    }, error => {
      this.toastr.error('Unauthorised');
    });
  }

}
