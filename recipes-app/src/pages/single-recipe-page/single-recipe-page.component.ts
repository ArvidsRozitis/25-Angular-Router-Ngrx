import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  recipesData,
  RecepiesDataInterface,
} from '../../assets/hardCodedRecipes';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { removeRecipe } from '../../store/recipes.actions';

@Component({
  selector: 'app-single-recipe-page',
  templateUrl: './single-recipe-page.component.html',
  styleUrls: ['./single-recipe-page.component.scss'],
})
export class SingleRecipePageComponent {
  recipes$: Observable<RecepiesDataInterface[]>;

  constructor(
    private activeRoute: ActivatedRoute,
    private store: Store<{ recipes: RecepiesDataInterface[] }>
  ) {
    this.recipes$ = store.select('recipes');
  }

  recipeId = '';
  recipeById = recipesData.find((obj) => obj.id === this.recipeId);
  recipe = this.recipeById === undefined ? recipesData[0] : this.recipeById;

  //here we need use null object aproach

  ngOnInit() {
    this.activeRoute.params.subscribe((routeParams) => {
      (this.recipeId = routeParams['id']),
        this.recipes$.subscribe((recipesData) => {
          this.recipeById = recipesData.find((obj) => obj.id === this.recipeId);
          this.recipe =
            this.recipeById === undefined ? recipesData[0] : this.recipeById;
        });
      console.log(routeParams['id']);
    });
  }

  removeRecipe() {
    this.store.dispatch(removeRecipe({ id: this.recipeId }));
  }
}
