import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedRecipeListComponent } from './featured-recipe-list.component';

describe('FeaturedRecipeListComponent', () => {
  let component: FeaturedRecipeListComponent;
  let fixture: ComponentFixture<FeaturedRecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedRecipeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
