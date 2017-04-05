import { Injectable } from '@angular/core';
import { Vip } from './vip.model';

@Injectable()
export class VipService {
  vip: Vip;

  constructor() {
    this.vip = new Vip();
    console.log('Vip Service Constructor');
  }

  signIn(newUser) {
    this.vip.userName = newUser;
    this.vip.loggedIn = true;
  }

  signOut() {
    this.vip.userName = '';
    this.vip.loggedIn = false;
  }
}
