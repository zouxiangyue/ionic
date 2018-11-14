import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BPage } from '../b/b'
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';//警报弹出框
import { ModalController, NavParams } from 'ionic-angular';
// ModalController覆盖用户页面的内容窗格

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  icons:string='camare';
  items=[];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }

  constructor(
    public navCtrl: NavController,
    public http:HttpClient,
    private alertCtrl: AlertController,
    public modalCtrl: ModalController) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  };
  presentAlert() {//警报函数
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  goSub(){
    this.navCtrl.push(BPage,{id:1});
  }

  ionViewDidLoad(){
   
  }
  doInfinite(infiniteScroll) {
    this.http.get('/api/courses').subscribe(data=>{
      console.log(data);
    })

    //console.log('Begin async operation');

    setTimeout(() => {

      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();//可以调用此方法表示加载已完成
      if(this.items.length>60){
        infiniteScroll.enable(false);//调用enable(false)禁用无限滚动，以便在滚动时主动尝试接收新数据
        console.log('enable')
      }
    }, 500);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
