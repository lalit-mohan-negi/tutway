import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {FormGroup, FormBuilder, Validators, FormControl}  from '@angular/forms';
import {Http} from '@angular/http';
import {Common} from '../../providers/common';
import { ForgotPage } from '../forgot/forgot';
import { NavParams } from 'ionic-angular/navigation/nav-params';

declare var google;
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  @ViewChild('map') mapElement: ElementRef;
  autocompleteItems;
    public autocomplete;
    service = new google.maps.places.AutocompleteService();
  role: any;
  SignupForm: FormGroup;
  SigninForm: FormGroup;
  teacher:any;
pet:any;

  constructor(
    public navCtrl: NavController,
    public common:Common,
    public http:Http,
    public formBuilder:FormBuilder,
    public toastCtrl:ToastController,
    public navParams:NavParams,
    private zone: NgZone,
  ) {
    this.autocompleteItems = [];
    this.autocomplete = {
        query: ''
    };

console.log(this.navParams.get('proceed'));
this.pet = "signin";
  }
  ngOnInit(): any {
    console.log('ngOnInit');
   this.SigninForm = this.formBuilder.group({
    email: ['', [Validators.required, this.emailValidator.bind(this)]],
   password: ['', [Validators.required]],
 });

 this.SignupForm = this.formBuilder.group({
  name: ['', [Validators.required]],
  phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
  email: ['', [Validators.required, this.emailValidator.bind(this)]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  cpassword: ['', [Validators.required, Validators.minLength(6)]],
  street: ['', [Validators.required]],
  address: ['', [Validators.required]],
  city: ['', [Validators.required]],
  state: ['', [Validators.required]],
  country: ['', [Validators.required]],
  postalcode: ['', [Validators.required]],
 // parent:[false,[Validators.required]],
  term:[true,[Validators.required,this.legal.bind(this)]],
  privacy:[true,[Validators.required,this.legal.bind(this)]]

 }, {validator: this.matchingPasswords('password', 'cpassword')},
 );
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

legal(legal){
  console.log(legal.value);
  if(legal.value == false){
      return {legal:false}
  }
  
}


emailValidator(control: FormControl): {[s: string]: boolean} {
 if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
   return {invalidEmail: true};
 }
}
isValidSignin(field: string) {
  let formField = this.SigninForm.get(field);
  return formField.valid || formField.pristine;
}

isValid(field: string) {
  let formField = this.SignupForm.get(field);
  return formField.valid || formField.pristine;
}

Signin(Signindata){
console.log(Signindata.value);
console.log(window.navigator.onLine);
if (window.navigator.onLine == true) {
if(Signindata.value.password.indexOf(' ') != 0){
var options = this.common.headers();
//      this.uniqueDeviceID.get().then((uuid: any) => {
//  console.log(uuid)
     var postdata = {
      email:Signindata.value.email,
      password:Signindata.value.password,
     // deviceid:uuid,
     // role:'user'
  }
  this.http.post(this.common.Url + 'parent_login.php', postdata, options).map(res => res.json()).subscribe(response=>{
      console.log(response);
      if(response.error == 0){
          localStorage.setItem('CurrentUser',JSON.stringify(response.data));
          this.navCtrl.push(HomePage);
      }else{
          this.common.presentAlert('Login',response.message);
      }
      
  })
// }).catch((error: any) => console.log(error));

  
}
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
ionChange(event){
console.log(event);
this.role = event;
}

signup(signupdata){
  console.log(this.role);
console.log(signupdata.value);
console.log(window.navigator.onLine);
if (window.navigator.onLine == true) {
if(signupdata.value.password.indexOf(' ') != 0){
var options = this.common.headers();
//      this.uniqueDeviceID.get().then((uuid: any) => {
//  console.log(uuid)
     var postdata = {
      name:signupdata.value.name,
      email:signupdata.value.email,
      password:signupdata.value.password,
      phone:signupdata.value.phone,
      address_line_1:signupdata.value.street,
      address_line_2:signupdata.value.address,
      city_name:signupdata.value.city,
      state_name:signupdata.value.state,
      country_name:signupdata.value.country,
      postal_code:signupdata.value.postalcode
     // deviceid:uuid,
     // role:'user'
  }
  var dynamicUrl;
  if(this.role == "parent"){
    console.log('parent signup');
    dynamicUrl = this.common.Url + 'parent_signup.php';
  }else{
    console.log('teacher signup');
    dynamicUrl = this.common.Url + 'teacher_signup.php';
  }
  this.http.post(dynamicUrl, postdata, options).map(res => res.json()).subscribe(response=>{
      console.log(response);
      if(response.error == 0){
         // localStorage.setItem('CurrentUser',JSON.stringify(response.userinfo));
          this.navCtrl.push(HomePage);
      }else{
          this.common.presentAlert('Signup',response.message);
      }
      
  })
// }).catch((error: any) => console.log(error));

  
}
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

hme_connt(){
  this.navCtrl.push(HomePage);
}
forgotPassword(){
  this.navCtrl.push(ForgotPage);
}
updateSearch() {
  console.log('update');
  console.log(this.autocomplete.query);
  if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
  }
  let me = this;
  
  this.service.getPlacePredictions({input: this.autocomplete.query}, function (predictions, status) {
      me.autocompleteItems = [];
      console.log('here');
      me.zone.run(function () {
          predictions.forEach(function (prediction) {
              //console.log(prediction);
              me.autocompleteItems.push(prediction.description);
          });
          console.log(me.autocompleteItems);
      });
  });
}
}
