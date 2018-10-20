import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorlistComponent } from './favorlist.component';

describe('FavorlistComponent', () => {
  let component: FavorlistComponent;
  let fixture: ComponentFixture<FavorlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
