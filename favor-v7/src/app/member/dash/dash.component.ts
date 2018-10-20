import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

export interface User {
  first: string;
  last: string;
}

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

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
