import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SpalshPage } from '../pages/spalsh/spalsh';
import { SliderPage } from '../pages/slider/slider';
import { SignupPage } from '../pages/signup/signup';
import { EnrollPage } from '../pages/enroll/enroll';
import { WatchvdeoPage } from '../pages/watchvdeo/watchvdeo';
import { Avg_vdeoPage } from '../pages/avg_vdeo/avg_vdeo';
import { Tme_spndPage } from '../pages/tme_spnd/tme_spnd';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { ContactusPage } from '../pages/contactus/contactus';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { TermsPage } from '../pages/terms/terms';
import { HelpPage } from '../pages/help/help';
import { ForgotPage } from '../pages/forgot/forgot';
import { PrivacypolicyPage } from '../pages/privacypolicy/privacypolicy';
import { EmailreportPage } from '../pages/emailreport/emailreport';
import { RedeemrewardPage } from '../pages/redeemreward/redeemreward';
import { SalesmancornerPage } from '../pages/salesmancorner/salesmancorner';
import { Appsetting } from '../providers/appsetting';
import { Common } from '../providers/common';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpModule} from '@angular/http';
import { FrontpagePage } from '../pages/frontpage/frontpage';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { StreamingMedia} from '@ionic-native/streaming-media';
import { VideolistPage } from '../pages/videolist/videolist';
import { ChartsModule } from 'ng2-charts';
// import {Player} from '@vimeo/player';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SpalshPage,
    SliderPage,
    SignupPage,
    EnrollPage,
     WatchvdeoPage,
     Avg_vdeoPage,
     Tme_spndPage,
     AboutusPage,
     ContactusPage,
     ChangepasswordPage,
     TermsPage,
     HelpPage,
     PrivacypolicyPage,
     EmailreportPage,
     RedeemrewardPage,
     SalesmancornerPage,
     ForgotPage,
     FrontpagePage,
     VideolistPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PdfViewerModule,
    ChartsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [

    MyApp,
    HomePage,
    ListPage,
    SpalshPage,
    SliderPage,
    SignupPage,
    EnrollPage,
     WatchvdeoPage,
     Avg_vdeoPage,
     Tme_spndPage,
     AboutusPage,
     ContactusPage,
     ChangepasswordPage,
     TermsPage,
     HelpPage,
     PrivacypolicyPage,
      EmailreportPage,
     RedeemrewardPage,
     SalesmancornerPage,
     ForgotPage,
     FrontpagePage,
     VideolistPage
  ],
  providers: [
    Appsetting,
    Common,
    StatusBar,
    SplashScreen,
    StreamingMedia,
    //Player,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
  
})
export class AppModule {}
