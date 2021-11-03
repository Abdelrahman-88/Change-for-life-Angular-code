import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-mango',
  templateUrl: './mango.component.html',
  styleUrls: ['./mango.component.scss']
})
export class MangoComponent implements OnInit {
  
  terms: string = "";
  recipes: any[] = [];
  term: string = "mango";
  constructor(private _RecipesService: RecipesService ,private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.displayRecipes(this.term);
  }

  searchForm: FormGroup = new FormGroup({
    "term": new FormControl(null, [Validators.pattern(/^((?!(<|>)).)+$/)])
  })

  search(searchForm: FormGroup) {
    if (searchForm.valid) {
      this.terms = searchForm.controls.term.value;
    }
    else {
      this.toastr.error(`Error invalid input(<>)!`, "", { positionClass: 'toast-bottom-right', timeOut: 5000 });
    }

  }

  displayRecipes(search:string) {
    this._RecipesService.getRecipes(search).subscribe((response) => {
      this.recipes = response.recipes;
      this.spinner.hide();
    },(error)=>{
      this.spinner.hide();
    })
  }

}
