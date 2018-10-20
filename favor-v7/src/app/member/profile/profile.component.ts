import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

export interface User {
  first: string;
  last: string;
  ctasks: number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {} as User;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getUserInfo().subscribe(res => {
      this.user = res;
    })
  }

}
