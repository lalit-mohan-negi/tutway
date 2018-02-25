import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnrollPage } from '../enroll/enroll';
import { WatchvdeoPage } from '../watchvdeo/watchvdeo';
import { Avg_vdeoPage } from '../avg_vdeo/avg_vdeo';
import { Tme_spndPage } from '../tme_spnd/tme_spnd';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }
enrol_lnk(){
  this.navCtrl.push(EnrollPage);
}

vdeo_lnk(){
  this.navCtrl.push(WatchvdeoPage);
}

avg_lnk(){
  this.navCtrl.push(Avg_vdeoPage);
}
tme_lnk(){
  this.navCtrl.push(Tme_spndPage);
}
}
