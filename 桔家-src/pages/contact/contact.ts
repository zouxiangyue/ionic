import { Component } from '@angular/core';
import {App, NavController, ModalController } from 'ionic-angular';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public app:App,public modalCtrl: ModalController,public navCtrl: NavController) {

  }
  
}
