import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {

  isConnected : boolean = false;

  connectedUser : User|undefined;
  login! : string;

  constructor(private _loginService : LoginService) { }

  ngOnInit(): void {
    
  }

  //Pour la démo avec boolean
  seConnecter() : void {
    this.isConnected = this._loginService.connect();
  }

  seDeconnecter() : void {
    this.isConnected = this._loginService.disconnect();
  }

  //Pour la démo avec utilisateur
  seConnecterUser() : void {
    this.connectedUser = this._loginService.connectUser(this.login);
  }

  seDeconnecterUser() : void {
    this.connectedUser = this._loginService.disconnectUser();
  }

}
