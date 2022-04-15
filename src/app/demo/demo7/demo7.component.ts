import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/utilisateur';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {

  userList : IUser[] = [];
  constructor(private _userService : UserService) { }

  ngOnInit(): void {
    this.userList = this._userService.getAll();
  }

}
