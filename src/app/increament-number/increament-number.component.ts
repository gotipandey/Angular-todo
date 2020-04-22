import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increament-number',
  templateUrl: './increament-number.component.html',
  styleUrls: ['./increament-number.component.css']
})
export class IncreamentNumberComponent {
  public counter : number = 0;
    
  increment(){
    this.counter++;
  }
  
  decrement(){
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }

}
