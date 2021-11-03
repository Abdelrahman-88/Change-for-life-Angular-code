import { FoodComponent } from './food/food.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { AppleComponent } from './apple/apple.component';
import { BananaComponent } from './banana/banana.component';
import { BeefComponent } from './beef/beef.component';
import { ChildComponent } from './child/child.component';
import { FishComponent } from './fish/fish.component';
import { MangoComponent } from './mango/mango.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PastaComponent } from './pasta/pasta.component';
import { PotatoComponent } from './potato/potato.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesdetailsComponent } from './recipesdetails/recipesdetails.component';
import { SaladComponent } from './salad/salad.component';
import { SteakComponent } from './steak/steak.component';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: "reload",
  scrollOffset: [0, 64],
  useHash:true
};

const routes: Routes = [
  {path:"" , redirectTo:"recipes" , pathMatch:"full"},
  {path:"recipes" , component:RecipesComponent},
  {path:"apple"  , component:AppleComponent},
  {path:"banana"  , component:BananaComponent},
  {path:"beef"  , component:BeefComponent},
  {path:"child"  , component:ChildComponent},
  {path:"fish"  , component:FishComponent},
  {path:"mango"  , component:MangoComponent},
  {path:"pasta"  , component:PastaComponent},
  {path:"potato"  , component:PotatoComponent},
  {path:"recipesdetails/:id"  , component:RecipesdetailsComponent},
  {path:"salad"  , component:SaladComponent},
  {path:"steak"  , component:SteakComponent},
  {path:"activities"  , component:ActivitiesComponent},
  {path:"food"  , component:FoodComponent},
  {path:"**"  , component:NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
