import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatNavigationComponent } from './mat-navigation.component';

describe('MatNavigationComponent', () => {
  let component: MatNavigationComponent;
  let fixture: ComponentFixture<MatNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
