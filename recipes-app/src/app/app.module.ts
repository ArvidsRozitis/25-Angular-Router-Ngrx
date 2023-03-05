import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { RecipesPageComponent } from '../pages/recipes-page/recipes-page.component';
import { AddRecipePageComponent } from '../pages/add-recipe-page/add-recipe-page.component';
import { FeaturedRecipeListComponent } from '../components/featured-recipe-list/featured-recipe-list.component';
import { RecipeListComponent } from '../components/recipe-list/recipe-list.component';
import { FeaturedRecipeCardComponent } from '../components/featured-recipe-card/featured-recipe-card.component';
import { RecipeCardComponent } from '../components/recipe-card/recipe-card.component';
import { RecipeSearchComponent } from '../components/recipe-search/recipe-search.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    RecipesPageComponent,
    AddRecipePageComponent,
    FeaturedRecipeListComponent,
    RecipeListComponent,
    FeaturedRecipeCardComponent,
    RecipeCardComponent,
    RecipeSearchComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
