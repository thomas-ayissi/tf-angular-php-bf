import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _connected! : boolean;
  private _users : User[] = [
    { login : "audeb", prenom : "Aude"},
    { login : "khunl", prenom : "Khun"}
  ]

  constructor() { }

  //Pour la version avec le boolean
  connect() : boolean {
    this._connected = true;
    return this._connected;
  }
  
  disconnect() : boolean {
    this._connected = false;
    return this._connected;
  }

  //Pour la version avec l'utilisateur
  connectUser(login : string) : User | undefined {
    return this._users.find(user => user.login == login);
  }

  disconnectUser() : undefined {
    return undefined;
  }
}
