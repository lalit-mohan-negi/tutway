import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {FormGroup, FormBuilder, Validators, FormControl}  from '@angular/forms';
import {Http} from '@angular/http';
import {Common} from '../../providers/common';


@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html'
})
export class ForgotPage {
  ForgotForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public common:Common,
    public http:Http,
    public formBuilder:FormBuilder,
    public toastCtrl:ToastController
  ) {

  }
  ngOnInit(): any {
    console.log('ngOnInit');
   this.ForgotForm = this.formBuilder.group({
    username: ['', [Validators.required]],
 });

}


isValid(field: string) {
  let formField = this.ForgotForm.get(field);
  return formField.valid || formField.pristine;
}


forgot(formdata){
console.log(formdata.value);
console.log(window.navigator.onLine);
if (window.navigator.onLine == true) {
var options = this.common.headers();
     var postdata = {
      username:formdata.value.username,
  }
  this.http.post(this.common.Url + 'parent_login.php', postdata, options).map(res => res.json()).subscribe(response=>{
      console.log(response);
      if(response.success == true){
          //localStorage.setItem('CurrentUser',JSON.stringify(response.userinfo));
          this.navCtrl.push(HomePage);
      }else{
          this.common.presentAlert('Login',response.message);
      }
      
  })
// }).catch((error: any) => console.log(error));

} else {
  let toast = this.toastCtrl.create({
  message: 'Check your internet connection',
  duration: 3000,
  position: 'bottom'
});

toast.onDidDismiss(() => {
console.log('Dismissed toast');
});

toast.present();
}
}


}
