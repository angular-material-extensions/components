import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMenuButtonComponent } from './mat-menu-button.component';

describe('MatMenuButtonComponent', () => {
  let component: MatMenuButtonComponent;
  let fixture: ComponentFixture<MatMenuButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatMenuButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
