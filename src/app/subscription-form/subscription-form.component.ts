import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Sub } from '../models/sub';
import { Subscriber } from 'rxjs';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent {
  isEmailError:boolean =false
  iaSubscribed:boolean= false;
  constructor(private subService:SubscribersService ){}

  onSubmit(formVal:NgForm["value"]){
  const subData:Sub = {
    name:formVal.name,
    email:formVal.email
  }
  this.subService.checkSubs(subData.email).subscribe(val=>{
    console.log(val);
    if(val.empty){
      this.subService.addSubs(subData);
      this.iaSubscribed = true
      this.isEmailError=false

    }
    else{
      this.isEmailError =true
    }

  })
}

}
