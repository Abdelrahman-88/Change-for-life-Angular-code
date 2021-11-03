import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ChildComponent } from './child/child.component';
import { RecipesdetailsComponent } from './recipesdetails/recipesdetails.component';
import { PotatoComponent } from './potato/potato.component';
import { AppleComponent } from './apple/apple.component';
import { BananaComponent } from './banana/banana.component';
import { BeefComponent } from './beef/beef.component';
import { FishComponent } from './fish/fish.component';
import { PastaComponent } from './pasta/pasta.component';
import { SteakComponent } from './steak/steak.component';
import { SaladComponent } from './salad/salad.component';
import { MangoComponent } from './mango/mango.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule} from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FoodComponent } from './food/food.component';
import { FlipModule } from 'ngx-flip';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    ActivitiesComponent,
    ChildComponent,
    RecipesdetailsComponent,
    PotatoComponent,
    AppleComponent,
    BananaComponent,
    BeefComponent,
    FishComponent,
    PastaComponent,
    SteakComponent,
    SaladComponent,
    MangoComponent,
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,
    SearchPipe,
    FoodComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,
    CarouselModule,
    FlipModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
