import { Component } from '@angular/core';
import { RecepiesDataInterface } from '../../assets/hardCodedRecipes';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-featured-recipe-list',
  templateUrl: './featured-recipe-list.component.html',
  styleUrls: ['./featured-recipe-list.component.scss'],
})
export class FeaturedRecipeListComponent {
  recipes$: Observable<RecepiesDataInterface[]>;
  constructor(private store: Store<{ recipes: RecepiesDataInterface[] }>) {
    this.recipes$ = store.select('recipes');
  }
}
