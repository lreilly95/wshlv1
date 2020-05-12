import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { NotificationService } from '../_services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private toastr: NotificationService) {}
  
  // Provides behaviour for route guards
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.toastr.error('Unauthorised');
    this.router.navigate(['/home']);
    return false;
  }
}
