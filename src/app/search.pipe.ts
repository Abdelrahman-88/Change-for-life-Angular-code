import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(recipes: any[], terms: string): any[] {
    return recipes.filter((recipe) => {
      if(recipe.title!=undefined){
        return recipe.title.toLowerCase().includes(terms.toLowerCase())
      }
    })
  }

}
