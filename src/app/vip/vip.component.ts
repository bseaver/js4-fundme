import { Component, OnInit } from '@angular/core';
import { VipService } from './../vip.service';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.css'],
  providers: [VipService]
})

export class VipComponent implements OnInit {
  userName: string;

  constructor(private vipService: VipService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.userName = this.vipService.getUser();
    console.log("ngDoCheck: " + this.userName)
  }

  signIn(inputUserName: string) {
    this.vipService.signIn(inputUserName);
  }

  signOut() {
    this.vipService.signOut();
  }

}






// import { Component, OnInit } from '@angular/core';
// import {SessionStorageService} from 'ng2-webstorage';
//
// @Component({
//   selector: 'app-vip',
//   templateUrl: './vip.component.html',
//   styleUrls: ['./vip.component.css'],
//   providers: []
// })
//
// export class VipComponent implements OnInit {
//   userName: string;
//
//   constructor(private sessionSt: SessionStorageService) { }
//
//   ngOnInit() {
//   }
//
//   ngDoCheck() {
//     this.userName = this.sessionSt.retrieve('userName');
//     console.log("ngDoCheck: " + this.userName)
//   }
//
//   signIn(inputUserName: string) {
//     inputUserName = inputUserName.trim();
//     if (inputUserName) {
//       this.sessionSt.store('userName', inputUserName);
//     }
//   }
//
//   signOut() {
//     this.sessionSt.clear('userName');
//   }
//
// }
