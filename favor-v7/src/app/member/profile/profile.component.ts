import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

export interface User {
  first: string;
  last: string;
  ctasks: number;
  tokens: number;
}

export interface Favors {
  name: string;
  type: string;
  time: string;
  date: string;
  complete: boolean;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {} as User;
  favors: Observable<Favors[]>;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getUserInfo().subscribe(res => {
      this.user = res;
    });
    this.favors = this.userService.getUserFavors();
    this.favors.subscribe(ref => {
      let count = 0;
      for (let item of ref) {
        if (item.complete) {
          count++;
        }
      }
      this.userService.updateUser(count);
    });
  }

  deleteFavor(favor) {
    console.log(favor);
    this.userService.delete(favor);
  }

}
