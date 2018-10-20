import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-private',
  templateUrl: './header-private.component.html',
  styleUrls: ['./header-private.component.css']
})
export class HeaderPrivateComponent implements OnInit {

  constructor(
    private router: Router,
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

}
