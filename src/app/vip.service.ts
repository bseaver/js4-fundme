import { Injectable } from '@angular/core';
import {SessionStorageService} from 'ng2-webstorage';

@Injectable()
export class VipService {
  constructor(private sessionSt: SessionStorageService) {
}

  getUser() {
    return this.sessionSt.retrieve('userName');
  }

  signIn(inputUserName: string) {
    inputUserName = inputUserName.trim();
    if (inputUserName) {
      this.sessionSt.store('userName', inputUserName);
    }
  }

  signOut() {
    this.sessionSt.clear('userName');
  }
}
