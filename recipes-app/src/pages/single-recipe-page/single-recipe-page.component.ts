import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {recipesData, RecepiesDataInterface} from "../../assets/hardCodedRecipes"

@Component({
  selector: 'app-single-recipe-page',
  templateUrl: './single-recipe-page.component.html',
  styleUrls: ['./single-recipe-page.component.scss']
})
export class SingleRecipePageComponent {
  constructor(private route:ActivatedRoute) {}
  ngOnInit() {}
  
  recipeId = this.route.snapshot.paramMap.get('id')
  recipeById = recipesData.find(obj => obj.id === this.recipeId);
  recipe = this.recipeById === undefined ? recipesData[0] : this.recipeById

}
