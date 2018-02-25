import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html'
})
export class SliderPage {

  constructor(public navCtrl: NavController) {}
sgn_lnk(){
  this.navCtrl.push(SignupPage);
}
}
