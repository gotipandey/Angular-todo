import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})

export class HobbyComponent implements OnInit {
  hobby: string;
  hobbies = [];
  constructor() { }

  ngOnInit(): void {
  }
  
  getVal(){
    console.log(this.hobby);
    this.hobbies.push(this.hobby);
    this.hobby = '';
  }
}