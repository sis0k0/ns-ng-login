import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'ns-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  moduleId: module.id,
})
export class AdminComponent implements OnInit {
  public message: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    const user = this.userService.getCurrentUser();
    this.message = `Whoa! Look who's here: ${user.username}`;
  }
}
