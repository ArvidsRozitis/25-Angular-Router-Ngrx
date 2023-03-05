import { Component } from '@angular/core';
import { recipesData, RecepiesDataInterface } from '../../assets/hardCodedRecipes';

@Component({
  selector: 'app-featured-recipe-list',
  templateUrl: './featured-recipe-list.component.html',
  styleUrls: ['./featured-recipe-list.component.scss'],
})
export class FeaturedRecipeListComponent {
  featuredRecepies: RecepiesDataInterface[] = recipesData;
}
