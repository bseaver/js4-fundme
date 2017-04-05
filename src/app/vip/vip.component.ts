import { Component, OnInit } from '@angular/core';
import { Vip } from './../vip.model';
import { VipService } from './../vip.service';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.css'],
  providers: [VipService]
})

export class VipComponent implements OnInit {
  vip: Vip;

  constructor(private vipService: VipService) { }

  ngOnInit() {
    this.vip = this.vipService.vip
  }

  signIn(userName: string) {
    this.vipService.signIn(userName);
    alert("Hello " + userName);
  }

  signOut() {
    this.vipService.signOut();
    alert("Good Bye");
  }

}
