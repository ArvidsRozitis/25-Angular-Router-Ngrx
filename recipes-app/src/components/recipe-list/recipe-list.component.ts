import { Component } from '@angular/core';
import { recipesData, RecepiesDataInterface } from '../../assets/hardCodedRecipes';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: RecepiesDataInterface[] = recipesData;


}
