import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetPage } from '../set/set';

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  b;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  changeBgColor(i){
    this.b=i;
  }
  set(){
    this.navCtrl.push(SetPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }

}
