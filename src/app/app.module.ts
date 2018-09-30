import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing-module';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './modules/shared/shared.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';


import {AppService} from './services/app.service';
import {VideoService} from './services/video.service';
import {ConverterService} from './services/converter.service';


@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
		PrivacyPolicyComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		BrowserAnimationsModule,
		HomeModule,
		SharedModule,
		AppRoutingModule
	],
	providers: [
		HttpClientModule,
		AppService,
		VideoService,
		ConverterService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
