import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController,AlertController } from 'ionic-angular';
/*
  Generated class for the Common provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Common {
 Url: string = 'https://www.tutway.com/apis/';
  constructor(public http: Http,public alertCtrl:AlertController) {
    console.log('Hello Common Provider');
    // alert('jdhjdh');
  }
  headers(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    return options;
  }
serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
  }
  presentAlert(title,subtitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Dismiss']
    });
    return setTimeout(()=>alert.present(),3000);
   // return alert.present();
  }
}