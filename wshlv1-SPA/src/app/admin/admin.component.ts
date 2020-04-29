import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
username: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // This prevents an error from the HTML accessing a private member of the component
    this.username = this.authService.decodedToken.unique_name;
  }

}
