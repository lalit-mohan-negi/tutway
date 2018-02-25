import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators, FormControl}  from '@angular/forms';
import {Http} from '@angular/http';
import {Common} from '../../providers/common';


@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html'
})
export class ChangepasswordPage {
  ChangepasswordForm: any;
 constructor(public navCtrl: NavController,
  public common:Common,
  public http:Http,
  public formBuilder:FormBuilder,
) {

  } 
   ngOnInit(): any {
    console.log('ngOnInit');
   this.ChangepasswordForm = this.formBuilder.group({
    oldpassword: ['', [Validators.required, Validators.minLength(6)]],
    newpassword: ['', [Validators.required, Validators.minLength(6)]],
    cnewpassword: ['', [Validators.required]],
 }, {validator: this.matchingPasswords('newpassword', 'cnewpassword')},);

}
matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  return (group: FormGroup): {[key: string]: any} => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];
    if (password.value !== confirmPassword.value) {
      return {
        mismatchedPasswords: true
      };
    }
  }
}

isValid(field: string) {
  let formField = this.ChangepasswordForm.get(field);
  return formField.valid || formField.pristine;
}
changepassword(changepassdata){
  console.log(changepassdata.value);

}

}
