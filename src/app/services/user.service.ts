import { Injectable } from '@angular/core';
import { IUser } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userList : IUser[] = [
    { lastname : "Beurive", firstname : "Aude", birthdate : new Date(1989, 9, 16), email : "aude.beurive@bstorm.be", password : "1234", nombreEnfants : 0},
    { lastname : "Ly", firstname : "Khun", birthdate : new Date(1982, 4, 6), email : "khun.ly@bstorm.be", password : "5678", nombreEnfants : 0}

  ];
  constructor() { }

  getAll() : IUser[]{
    return this._userList;
  }

  getUserById(id : number) : IUser{
    return this._userList[id];
  }

  addUser(user : IUser)
  {
    this._userList.push(user);
  }
}
