import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { APage } from '../pages/a/a';
import { BPage } from '../pages/b/b';
import { AddPage } from '../pages/add/add';
import { ShopPage } from '../pages/shop/shop';
import { LingganPage } from '../pages/linggan/linggan';
import { MyPage } from '../pages/my/my';
import { SetPage } from '../pages/set/set';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';

import{HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    AddPage,
    MyPage,
    LingganPage,
    ShopPage,
    SetPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(
      MyApp,
      {
        backButtonText: '',
        iconMode: 'ios',
        TabsHidenOnSubPages:'true',
        modalEnter: 'modal-slide-in',
        modalLeave: 'modal-slide-out',
        tabsPlacement: 'bottom',
        pageTransition: 'ios-transition'
      }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    AddPage,
    MyPage,
    LingganPage,
    ShopPage,
    SetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],

})
export class AppModule {}
