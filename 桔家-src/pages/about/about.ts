import { Component, ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides)slides:Slides;//@ViewChild查看组件方法的装饰器函数
  constructor(public navCtrl: NavController) {
   /*  console.log(this.slides.getActiveIndex); undefined 在constructor没有获取到Slides */ 
  }
  ionViewDidLoad(){

  }
change(){
  console.log(this.slides.getActiveIndex())
}
}
