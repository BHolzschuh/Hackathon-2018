import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../../services/leader.service';
import { Observable } from 'rxjs';

export interface User {
  first: string;
  last: string;
  ctasks: number;
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  counter = 1;

  leaders: Observable<User[]>;

  constructor(
    private leaderService: LeaderService,
  ) { }

  ngOnInit() {
    this.leaders = this.leaderService.getLeaders();
  }


}
