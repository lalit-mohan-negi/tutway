import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the FrontpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frontpage',
  templateUrl: 'frontpage.html',
})
export class FrontpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
proceed(event){
  this.navCtrl.push(SignupPage,{proceed:event});
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad FrontpagePage');
  }

}
