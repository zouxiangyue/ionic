import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { APage } from '../a/a';
import { BPage } from '../b/b';
import { ShopPage } from '../shop/shop';
import { MyPage } from '../my/my';
import { LingganPage } from '../linggan/linggan';
import { AddPage } from '../add/add';
import { NavController, ModalController } from 'ionic-angular';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ShopPage;
  tab3Root = ContactPage;
  tab4Root = LingganPage;
  tab5Root = MyPage;
  //tab5Root = 'BPage';
  constructor(public modalCtrl: ModalController,public navCtrl: NavController) {

  }
  ionViewDidLoad(){
    document.querySelector("#tab-t0-2").addEventListener('click',()=>{
      let profileModal=this.modalCtrl.create(AddPage);
      profileModal.present();
    },false)
  }
}
