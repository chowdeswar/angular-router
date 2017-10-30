import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
power: any;
naming: any;
  constructor() {
   }

  ngOnInit() {
    this.naming = "https://ak.picdn.net/assets/cms/97e1dd3f8a3ecb81356fe754a1a113f31b6dbfd4-stock-photo-photo-of-a-common-kingfisher-alcedo-atthis-adult-male-perched-on-a-lichen-covered-branch-107647640.jpg";
  	this.power = {
  		name: 'chowdeswar',
  		id: 123,
  		title: 'title for proper description',
  		alterego: true
  	};
  }

}
