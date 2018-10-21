import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorViewComponent } from './favor-view.component';

describe('FavorViewComponent', () => {
  let component: FavorViewComponent;
  let fixture: ComponentFixture<FavorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
