import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipesdetails',
  templateUrl: './recipesdetails.component.html',
  styleUrls: ['./recipesdetails.component.scss']
})
export class RecipesdetailsComponent implements OnInit {
  id: string = "";
  recipe:any;
  constructor(private _RecipesService: RecipesService, private spinner: NgxSpinnerService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.spinner.show();
    this.id = this._ActivatedRoute.snapshot.params.id;
    this._RecipesService.getRecipesDetails(this.id).subscribe((response) => {
      this.recipe = response.recipe;
      this.spinner.hide();
    },(error)=>{
      this.spinner.hide();
    })
  }

}
