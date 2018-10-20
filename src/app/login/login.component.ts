import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor() { }

  ngOnInit() {
  }

  login() {
  }
}
