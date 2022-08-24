import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseEnVenteArticleComponent } from './mise-en-vente-article.component';

describe('MiseEnVenteArticleComponent', () => {
  let component: MiseEnVenteArticleComponent;
  let fixture: ComponentFixture<MiseEnVenteArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiseEnVenteArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiseEnVenteArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
