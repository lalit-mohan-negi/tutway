import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SpalshPage } from '../pages/spalsh/spalsh';
import { SignupPage } from '../pages/signup/signup';
import { SliderPage } from '../pages/slider/slider';
import { EnrollPage } from '../pages/enroll/enroll';
import { WatchvdeoPage } from '../pages/watchvdeo/watchvdeo';
import { Avg_vdeoPage } from '../pages/avg_vdeo/avg_vdeo';
import { Tme_spndPage } from '../pages/tme_spnd/tme_spnd';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { ContactusPage } from '../pages/contactus/contactus';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { TermsPage } from '../pages/terms/terms';
import { HelpPage } from '../pages/help/help';
import { PrivacypolicyPage } from '../pages/privacypolicy/privacypolicy';
import { EmailreportPage } from '../pages/emailreport/emailreport';
import { RedeemrewardPage } from '../pages/redeemreward/redeemreward';
import { SalesmancornerPage } from '../pages/salesmancorner/salesmancorner';
import { FrontpagePage } from '../pages/frontpage/frontpage';
import { VideolistPage } from '../pages/videolist/videolist';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;// = SpalshPage;//WatchvdeoPage
  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
  
  ) {
    this.initializeApp();
//alert('jksdhfka');
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'ios-home-outline' },
      { title: 'Watch video', component: VideolistPage, icon: 'ios-home-outline' },
      { title: 'Inbox', component: ListPage, icon: 'ios-mail-open-outline' },
      { title: 'About Us', component: AboutusPage, icon: 'ios-people-outline' },
      { title: 'Average Mark Detail', component: Avg_vdeoPage, icon: 'ios-home-outline' },
      { title: 'Time Spend', component: Tme_spndPage, icon: 'ios-timer-outline' },
      { title: 'Video Watch Detail', component: WatchvdeoPage, icon: 'logo-youtube' },
      { title: 'Email Report Setting', component: EmailreportPage, icon: 'ios-document-outline' },
      { title: 'Salesman Corner', component: SalesmancornerPage, icon: 'ios-man-outline' },
      { title: 'Redeem Reward List', component: RedeemrewardPage, icon: 'ios-home-outline' },
      { title: 'Privacy Policy', component: PrivacypolicyPage, icon: 'ios-contact-outline' },
      { title: 'Help', component: HelpPage, icon: 'ios-help-circle-outline' },
      { title: 'Terms & Condition', component: TermsPage, icon: 'ios-home-outline' },
      { title: 'Change Password', component: ChangepasswordPage, icon: 'ios-unlock-outline' },
      { title: 'Contact Us', component: ContactusPage, icon: 'ios-pin-outline' }
    ];
    if(localStorage.getItem('CurrentUser')){
      this.rootPage = HomePage;
    }else{
      this.rootPage = SpalshPage;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  Logout(){
    localStorage.clear();
    this.nav.setRoot(SpalshPage);
  }
}
