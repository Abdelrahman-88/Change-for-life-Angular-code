import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  very(){
    document.getElementById("very")?.scrollIntoView({behavior:"smooth"})
  }
  over(){
    document.getElementById("over")?.scrollIntoView({behavior:"smooth"})
  }
  healthy(){
    document.getElementById("healthy")?.scrollIntoView({behavior:"smooth"})
  }
  under(){
    document.getElementById("under")?.scrollIntoView({behavior:"smooth"})
  }
  change(){
    document.getElementById("change")?.scrollIntoView({behavior:"smooth"})
  }

}
