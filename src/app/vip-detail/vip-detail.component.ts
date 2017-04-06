import { Component, OnInit } from '@angular/core';
import { VipService } from './../vip.service';
import { ProjectService } from './../project.service';
import { Vip } from './../vip.model';
import { Project } from './../project.model';

@Component({
  selector: 'app-vip-detail',
  templateUrl: './vip-detail.component.html',
  styleUrls: ['./vip-detail.component.css'],
  providers: [VipService, ProjectService]
})
export class VipDetailComponent implements OnInit {
  username: string;

  constructor(private vipService: VipService, private projectService: ProjectService) { }

  ngOnInit() {
    this.username = this.vipService.getUser();
  }

}
