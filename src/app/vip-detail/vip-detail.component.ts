import { Component, OnInit } from '@angular/core';
import { VipService } from './../vip.service';

@Component({
  selector: 'app-vip-detail',
  templateUrl: './vip-detail.component.html',
  styleUrls: ['./vip-detail.component.css'],
  providers: [VipService]
})
export class VipDetailComponent implements OnInit {
  username: string;

  constructor(private vipService: VipService) { }

  ngOnInit() {
    this.username = this.vipService.getUser();
  }

}
