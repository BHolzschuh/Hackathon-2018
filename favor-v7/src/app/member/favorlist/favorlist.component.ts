import { Component, OnInit } from '@angular/core';
import { FavorService } from '../../services/favor.service';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

export interface Favors {
  name: string;
  type: string;
  time: string;
  date: string;
}

@Component({
  selector: 'app-favorlist',
  templateUrl: './favorlist.component.html',
  styleUrls: ['./favorlist.component.css']
})
export class FavorlistComponent implements OnInit {

  favors: Observable<Favors[]>;
  selectedFavor: Favors;

  constructor(
    private favorservice: FavorService,
  ) { }

  ngOnInit() {
    this.favors = this.favorservice.getFavors();
    this.favors.subscribe(res => {
      for (let item of res) {
        if (item) {
          this.selectedFavor = item;
          break;
        }
      }
    })
  }

  selectTask(favor) {
    console.log(favor);
    this.selectedFavor = favor;
  }

}
