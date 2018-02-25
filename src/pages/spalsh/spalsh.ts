import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SliderPage } from '../slider/slider';

@Component({
  selector: 'page-spalsh',
  templateUrl: 'spalsh.html'
})
export class SpalshPage {

  constructor(public navCtrl: NavController) {}
slider_lnk(){
  this.navCtrl.push(SliderPage);
}
}
