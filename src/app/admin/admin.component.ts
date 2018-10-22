import { Component, OnInit } from '@angular/core';

import { SessionQuery } from '../state/session.query';

@Component({
  selector: 'ns-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  moduleId: module.id,
})
export class AdminComponent implements OnInit {
  public message: string;

  constructor(private sessionQuery: SessionQuery) {
  }

  ngOnInit() {
    this.sessionQuery.user$.subscribe(user => {
      this.message = `Whoa! Look who's here: ${user.username}`;
    });
  }
}
