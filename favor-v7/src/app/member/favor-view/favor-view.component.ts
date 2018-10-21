import { Component, OnInit, Input } from '@angular/core';
import { FavorService } from '../../services/favor.service';

export interface Favor {
  name: string;
  type: string;
  time: string;
  date: string;
  complete?: boolean;
}

@Component({
  selector: 'app-favor-view',
  templateUrl: './favor-view.component.html',
  styleUrls: ['./favor-view.component.css']
})
export class FavorViewComponent implements OnInit {
  @Input()
  favor: Favor;

  constructor(
    private favorService: FavorService,
  ) { }

  ngOnInit() {
    console.log(this.favor);
  }

  addFavor(favor) {
    //console.log(favor);
    this.favorService.addFavor(favor);
  }

}
