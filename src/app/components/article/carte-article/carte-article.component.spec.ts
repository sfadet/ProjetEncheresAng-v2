import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteArticleComponent } from './carte-article.component';

describe('CarteArticleComponent', () => {
  let component: CarteArticleComponent;
  let fixture: ComponentFixture<CarteArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
