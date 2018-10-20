import { Component, OnInit } from '@angular/core';
import { FavorService } from '../../services/favor.service';
import { Observable } from 'rxjs';

export interface Favors {
  name: string;
  type: string;
  time: string;
}

@Component({
  selector: 'app-favorlist',
  templateUrl: './favorlist.component.html',
  styleUrls: ['./favorlist.component.css']
})
export class FavorlistComponent implements OnInit {

  favors: Observable<Favors[]>;

  constructor(
    private favorservice: FavorService,
  ) { }

  ngOnInit() {
    this.favors = this.favorservice.getFavors();
  }

}
