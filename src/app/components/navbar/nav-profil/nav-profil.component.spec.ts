import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProfilComponent } from './nav-profil.component';

describe('NavProfilComponent', () => {
  let component: NavProfilComponent;
  let fixture: ComponentFixture<NavProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
