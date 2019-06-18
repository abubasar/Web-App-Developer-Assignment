import { Component, OnInit } from '@angular/core';
import { BusinessEntityService } from 'src/app/services/business-entity.service';
import { BaseComponent } from '../base/base.component';
import { MarkupPlanService } from 'src/app/services/markup-plan.service';
import { BaseRequestModel } from 'src/app/entities/base-request-model';

@Component({
  selector: 'app-list-business-entity',
  templateUrl: './list-business-entity.component.html',
  styleUrls: ['./list-business-entity.component.css']
})
export class ListBusinessEntityComponent extends BaseComponent<any> implements OnInit {

  reset() {
    throw new Error("Method not implemented.");
  }
markupPlans:any[]
  constructor(service:BusinessEntityService,private markupPlanService:MarkupPlanService) 
  {super(service)
   }

  ngOnInit() {
    this.search();
    this.searchForPaging();
    this.loadMarkupPlans()
  }

loadMarkupPlans(){
  var r=new BaseRequestModel();
  r.page=-1;
  r.orderBy="updatedOnUtc"
  this.markupPlanService.search(r).subscribe(res=>{
           this.markupPlans=res;
           console.log(res)
  });
}
}
