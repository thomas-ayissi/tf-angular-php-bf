import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/utilisateur';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-demo7details',
  templateUrl: './demo7details.component.html',
  styleUrls: ['./demo7details.component.scss']
})
export class Demo7detailsComponent implements OnInit {

  user! : IUser;
  constructor(private _userService : UserService, private _activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    let id = this._activeRoute.snapshot.params['id'];
    // let category = this._activeRoute.snapshot.params['category'];

    this.user = this._userService.getUserById(id);
  }

}
