import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  page;

  constructor() { }

  ngOnInit() {
    this.page = 1;
  }

  register(num) {
    this.page = num;
    console.log(num);
  }

}
