import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  flipCream = false;
  flipJuice = false;
  flipCereal = false;
  flipChoco = false;
  flipSweets = false;
  flipYoghurt = false;
  terms:any;
  constructor() { }

  ngOnInit(): void {
  }

  
  onClick(term:any) {
    if(term=="cream"){
      this.flipCream = !this.flipCream;
    }
    else if(term=="juice"){
      this.flipJuice = !this.flipJuice;
    }
    else if(term=="cereal"){
      this.flipCereal = !this.flipCereal;
    }
    else if(term=="choco"){
      this.flipChoco = !this.flipChoco;
    }
    else if(term=="sweets"){
      this.flipSweets = !this.flipSweets;
    }
    else if(term=="yoghurt"){
      this.flipYoghurt = !this.flipYoghurt;
    }
  }
}
