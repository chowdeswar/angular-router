import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
name: string = '';
  constructor() { 
   this.name = "chow chow";
 }

  ngOnInit() {
  	setTimeout(() => {
  		$('#myModal').modal();
  	}, 4000);
  }

}
