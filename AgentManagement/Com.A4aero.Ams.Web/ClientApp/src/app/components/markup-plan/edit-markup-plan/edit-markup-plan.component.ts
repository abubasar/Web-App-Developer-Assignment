import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Entity } from 'src/app/entities/entity';
import { MarkupPlanService } from 'src/app/services/markup-plan.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-markup-plan',
  templateUrl: './edit-markup-plan.component.html',
  styleUrls: ['./edit-markup-plan.component.css']
})
export class EditMarkupPlanComponent extends BaseComponent<any> implements OnInit {
  reset() {
    this.model=new Entity()
  }
plan={}
  constructor(service:MarkupPlanService,private activatedRoute:ActivatedRoute) {
    super(service)
   }

  ngOnInit() {
    this.service.get(this.activatedRoute.snapshot.params.id).subscribe(res=>{
      console.log(res)
      this.plan=res
    })
  }

}
