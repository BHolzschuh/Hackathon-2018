import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header-private',
  templateUrl: './header-private.component.html',
  styleUrls: ['./header-private.component.css']
})
export class HeaderPrivateComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  goHomepage() {
    this.router.navigateByUrl('member/dash');
  }

  pushProfile() {
    this.router.navigateByUrl('member/profile');
  }

  pushLeaderboard() {
    this.router.navigateByUrl('member/leaderboard');
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('public/login');
  }

}
