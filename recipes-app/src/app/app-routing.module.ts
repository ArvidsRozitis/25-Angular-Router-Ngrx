import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { RecipesPageComponent } from '../pages/recipes-page/recipes-page.component';
import { AddRecipePageComponent } from '../pages/add-recipe-page/add-recipe-page.component';
import { SingleRecipePageComponent } from 'src/pages/single-recipe-page/single-recipe-page.component';
import { RecipeListComponent } from 'src/components/recipe-list/recipe-list.component';

const routes: Routes = [
  { path: 'about', component: AboutPageComponent },
  { path: 'addRecipe', component: AddRecipePageComponent },

  {
    path: 'recipes',
    component: RecipesPageComponent,
    children: [
      { path: 'allRecipes', component: RecipeListComponent },
      { path: 'recipe/:id', component: SingleRecipePageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
