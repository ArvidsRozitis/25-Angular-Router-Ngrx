import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { RecipesPageComponent } from '../pages/recipes-page/recipes-page.component';
import { AddRecipePageComponent } from '../pages/add-recipe-page/add-recipe-page.component';

const routes: Routes = [
  { path: 'about', component: AboutPageComponent },
  { path: 'recipes', component: RecipesPageComponent },
  { path: 'addRecipe', component: AddRecipePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
