import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  moduleId: module.id,
})
export class AboutComponent implements OnInit {
  public info: string;

  constructor() {
    this.info = "This application is awesome. So is HMR.";
  }

  ngOnInit() {
  }

}
