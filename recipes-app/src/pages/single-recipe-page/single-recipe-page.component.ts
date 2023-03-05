import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { recipesData } from '../../assets/hardCodedRecipes';

@Component({
  selector: 'app-single-recipe-page',
  templateUrl: './single-recipe-page.component.html',
  styleUrls: ['./single-recipe-page.component.scss'],
})
export class SingleRecipePageComponent {
  constructor(private activeRoute: ActivatedRoute) {}

  recipeId = '';
  recipeById = recipesData.find((obj) => obj.id === this.recipeId);
  recipe = this.recipeById === undefined ? recipesData[0] : this.recipeById;

  //here we need use null object aproach

  ngOnInit() {
    this.activeRoute.params.subscribe((routeParams) => {
      (this.recipeId = routeParams['id']),
        (this.recipeById = recipesData.find((obj) => obj.id === this.recipeId));
      this.recipe =
        this.recipeById === undefined ? recipesData[0] : this.recipeById;
      console.log(routeParams['id']);
    });
  }
}
