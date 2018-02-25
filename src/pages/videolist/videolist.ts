import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';
import { Appsetting } from '../../providers/appsetting';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Common} from '../../providers/common';



@Component({
  selector: 'page-videolist',
  templateUrl: 'videolist.html'
})

export class VideolistPage {
  videoplayer: any;
  video: any;
  videosdata: any;
  videos: any = []

  constructor(
    public navCtrl: NavController,
    private streamingMedia: StreamingMedia,
    public appsetting: Appsetting,
    public loadingCtrl: LoadingController,
    public http: Http,
    public formBuilder: FormBuilder,
    public modalCtrl: ModalController,
    public common:Common,

  ) {
   // alert('videolist hh');
    this.getvideos();
    this.video = document.getElementsByTagName('video');
    console.log(this.video);
    

  }
  ngOnInit(): any {
    console.log('ngOnInit');
    //    this.videoplayer = this.formBuilder.group({
    //    video: [''],

    //  });
  }

  startVideo(vidId, vide) {
    console.log(vide);
    let options: StreamingVideoOptions = {
      successCallback: (res) => {
        console.log('Finished Video');
       // alert('finished video');
       // alert(JSON.stringify(res));
        let options = this.common.headers();
        var Loading = this.loadingCtrl.create({
          //spinner: 'Bubbles',
          content: 'Please wait...',
        });
        Loading.present().then(() => {
          var postdata = {
            student_master_id: 1,
            week_master_id: 2,
            course_master_id: 1,
            video_master_id: vidId
          }
          this.http.post( this.common.Url + 'videodetailmaster.php', postdata, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            Loading.dismiss();
           // alert('Video detail save');

          })
        })
      },
      errorCallback: (e) => {
        console.log('Error: ', e);
        alert('error');
        alert(JSON.stringify(e));
      },
      orientation: 'portrait'
    };

    // http://www.sample-videos.com/
    this.streamingMedia.playVideo(vide, options);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getvideos();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  getvideos() {
    var aa = this;
    let options = this.common.headers();
    var Loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="assets/imgs/loader.gif" />`,
    });
    Loading.present().then(() => {
      this.http.get(this.common.Url + 'get_video.php', options).map(res => res.json()).subscribe(response => {
        console.log(response);
        Loading.dismiss();
        response.forEach(function (value, key) {
          console.log(value);
          console.log(key);
          if (key <= 10) {
            aa.videos.push(value);
          }
        });
        // this.videosdata = response;   
        console.log(this.videos);

      })
    })
  }

}
