import { createReducer, on } from '@ngrx/store';
import { removeRecipe } from './recipes.actions';
import { recipesData } from '../assets/hardCodedRecipes';

export const initialState = recipesData;

export const recipeReducer = createReducer(
  initialState,

  on(removeRecipe, (state, { id }) => {
    const recipes = state.filter((recipe) => recipe.id !== id);
    return recipes;
  })
  // on(increment, (state) => state + 1),
  // on(decrement, (state) => state - 1),
  // on(reset, (state) => 0)
);
