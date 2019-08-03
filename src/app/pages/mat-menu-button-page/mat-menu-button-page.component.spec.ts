import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMenuButtonPageComponent } from './mat-menu-button-page.component';

describe('MatMenuButtonPageComponent', () => {
  let component: MatMenuButtonPageComponent;
  let fixture: ComponentFixture<MatMenuButtonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatMenuButtonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatMenuButtonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
