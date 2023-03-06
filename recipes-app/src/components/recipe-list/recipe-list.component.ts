import { Component } from '@angular/core';
import { RecepiesDataInterface } from '../../assets/hardCodedRecipes';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  recipes$: Observable<RecepiesDataInterface[]>;
  constructor(private store: Store<{ recipes: RecepiesDataInterface[] }>) {
    this.recipes$ = store.select('recipes');
  }
}
