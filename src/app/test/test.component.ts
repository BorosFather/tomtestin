import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  mass = new FormControl("");
  height = new FormControl("");
  index = new FormControl("");

  indexHide = false;


  constructor() { }

  ngOnInit(): void {
  }

  onKey(event:any){
  if(event.key == "Enter"){
    this.onEnter();
    }  
  }
  CalStrat() {
    let mass = Number(this.mass.value);
    let height = Number(this.height.value);

    let index = this.bodyMass(mass, height);

    this.index.setValue(String(index));
    this.indexHide = true;
  }

  bodyMass(mass : number, height : number){
    let index = mass / Math.pow(height, 2);
    return index;
  }

  onEnter() {
    this.CalStrat();
  }

  onClickButton(){
    this.CalStrat();
  }

  
}
