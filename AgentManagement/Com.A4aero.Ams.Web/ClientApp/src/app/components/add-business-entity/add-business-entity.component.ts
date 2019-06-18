import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Entity } from 'src/app/entities/entity';
import { BusinessEntityService } from 'src/app/services/business-entity.service';
import { BaseRequestModel } from 'src/app/entities/base-request-model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MarkupPlanService } from 'src/app/services/markup-plan.service';

@Component({
  selector: 'app-add-business-entity',
  templateUrl: './add-business-entity.component.html',
  styleUrls: ['./add-business-entity.component.css']
})
export class AddBusinessEntityComponent extends BaseComponent<any> implements OnInit {
  reset() {
   this.model=new Entity();
  }
  agentForm:FormGroup
markupPlans:any[]
  constructor(public service:BusinessEntityService,private formBuilder:FormBuilder,private router:Router,private markupPlanService:MarkupPlanService) {
    super(service)
   }

  ngOnInit() {
    this.agentForm=this.formBuilder.group({
      agentType: [''],
      balance:[''],
      city: [''],
      code: [''],
      contactPerson:[''],
      country: [''],
      currentBalance:0,
      deleted: false,
      email:[''],
      loginUrl: [''],
      logo: [''],
      markupPlanId:1,
      mobile:[''],
      name: [''],
      phone:[''],
      referredBy: [''],
      securityCode: [''],
      smtpPassword:[''],
      smtpPort: 0,
      smtpServer:[''],
      smtpUsername: [''],
      state: [''],
      status: 2,
      street:[''],
      zip:['']
      
      });
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

  saveAgent(){
    this.service.save(this.agentForm.value).subscribe(res=>{
      this.router.navigate(['list-business-entity'])
    },error=>{
      console.log(error);
    })
  }
  }

