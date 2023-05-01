import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLocalStorageService {

  constructor() { }

  public setItem(token_name: any,tokenValue: any) {
    // console.log("setitem", token_name)
    localStorage.setItem(token_name, tokenValue)
  }

  public getItem(token: any) {
    // console.log("getitem", token)
    return localStorage.getItem(token)
  }

  public removeItem(token: any) {
    // console.log("removeitem", token)
    return localStorage.removeItem(token)
  }
}
