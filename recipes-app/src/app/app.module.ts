import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { recipeReducer } from '../store/recipes.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { RecipesPageComponent } from '../pages/recipes-page/recipes-page.component';
import { AddRecipePageComponent } from '../pages/add-recipe-page/add-recipe-page.component';
import { FeaturedRecipeListComponent } from '../components/featured-recipe-list/featured-recipe-list.component';
import { RecipeListComponent } from '../components/recipe-list/recipe-list.component';
import { RecipeSearchComponent } from '../components/recipe-search/recipe-search.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SingleRecipePageComponent } from '../pages/single-recipe-page/single-recipe-page.component';
import { TestCounterComponent } from './test-counter/test-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    RecipesPageComponent,
    AddRecipePageComponent,
    FeaturedRecipeListComponent,
    RecipeListComponent,
    RecipeSearchComponent,
    NavigationComponent,
    FooterComponent,
    SingleRecipePageComponent,
    TestCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ recipe: recipeReducer },{}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
