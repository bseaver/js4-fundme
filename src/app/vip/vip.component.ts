import { Component, OnInit, DoCheck } from '@angular/core';
import { VipService } from './../vip.service';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.css'],
  providers: [VipService]
})

export class VipComponent implements OnInit, DoCheck {
  userName: string;

  constructor(private vipService: VipService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.userName = this.vipService.getUser();
    console.log('ngDoCheck: ' + this.userName);
  }

  signIn(inputUserName: string) {
    this.vipService.signIn(inputUserName);
  }

  signOut() {
    this.vipService.signOut();
  }

}
