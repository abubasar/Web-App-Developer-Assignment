import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { MarkupPlanService } from 'src/app/services/markup-plan.service';

@Component({
  selector: 'app-list-markup-plan',
  templateUrl: './list-markup-plan.component.html',
  styleUrls: ['./list-markup-plan.component.css']
})
export class ListMarkupPlanComponent extends BaseComponent<any> implements OnInit {
  reset() {
    throw new Error("Method not implemented.");
  }

  constructor(service:MarkupPlanService) {
    super(service);
  }

  ngOnInit() {
    this.searchForPaging();
    this.search()
  }

}
