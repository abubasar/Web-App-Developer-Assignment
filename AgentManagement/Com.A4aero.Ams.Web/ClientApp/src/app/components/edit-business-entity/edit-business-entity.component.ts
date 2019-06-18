import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Entity } from 'src/app/entities/entity';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BusinessEntityService } from 'src/app/services/business-entity.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MarkupPlanService } from 'src/app/services/markup-plan.service';
import { BaseRequestModel } from 'src/app/entities/base-request-model';

@Component({
  selector: 'app-edit-business-entity',
  templateUrl: './edit-business-entity.component.html',
  styleUrls: ['./edit-business-entity.component.css']
})
export class EditBusinessEntityComponent extends BaseComponent<any> implements OnInit {

  reset() {
    this.model=new Entity();
   }
   agentForm:FormGroup
 markupPlans:any[]
   constructor(public service:BusinessEntityService,private formBuilder:FormBuilder,private router:Router,
    private markupPlanService:MarkupPlanService,private activatedRoute:ActivatedRoute) {
     super(service)
    }
 
   ngOnInit() {
    var id=this.activatedRoute.snapshot.params.id;
    this.service.get(id).subscribe(res=>{
      this.model=res
    })
  //   this.service.get(id).subscribe(res=>{
  //     console.log(res);
  //    this.agentForm=this.formBuilder.group({
  //      id:res.id,
  //      agentType: res.agentType,
  //      balance:res.balance,
  //      city: res.city,
  //      code: res.code,
  //      contactPerson:res.contactPerson,
  //      country: res.country,
  //      currentBalance:res.currentBalance,
  //      deleted: res.deleted,
  //      email:res.email,
  //      loginUrl:res.loginUrl,
  //      logo: res.logo,
  //      markupPlanId:res.markupPlanId,
  //      mobile:res.mobile,
  //      name: res.name,
  //      phone:res.phone,
  //      referredBy: res.referredBy,
  //      securityCode: res.securityCode,
  //      smtpPassword:res.smtpPassword,
  //      smtpPort: res.smtpPort,
  //      smtpServer:res.smtpServer,
  //      smtpUsername: res.smtpUsername,
  //      state: res.state,
  //      status: res.status,
  //      street:res.street,
  //      zip:res.zip
       
  //     },error=>{
  //       console.log(error)
  //     });
  // })
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
 
  //  editAgent(){
  //    this.service.edit(this.agentForm.value).subscribe(res=>{
  //      this.router.navigate([''])
  //    },error=>{
  //      console.log(error);
  //    })
  //  }
   

   



   }
 