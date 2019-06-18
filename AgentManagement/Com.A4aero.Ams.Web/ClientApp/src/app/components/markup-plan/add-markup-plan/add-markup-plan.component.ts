import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { MarkupPlanService } from 'src/app/services/markup-plan.service';
import { Entity } from 'src/app/entities/entity';

@Component({
  selector: 'app-add-markup-plan',
  templateUrl: './add-markup-plan.component.html',
  styleUrls: ['./add-markup-plan.component.css']
})
export class AddMarkupPlanComponent extends BaseComponent<any> implements OnInit {
  reset() {
    this.model=new Entity()
  }

  constructor(service:MarkupPlanService) { 
    super(service)
  }

  ngOnInit() {
  }

}
