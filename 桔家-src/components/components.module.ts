import { NgModule } from '@angular/core';
//import { AComponent } from './a/a';
import { BComponent } from './b/b';
import {BrowserModule} from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import{HttpClient} from '@angular/common/http'

@NgModule({
	declarations: [
    BComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot(ComponentsModule)
	],
	exports: [
    BComponent]
})
export class ComponentsModule {}
