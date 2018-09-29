import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing-module';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './modules/shared/shared.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';


import {AppService} from "./services/app.service";


@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
		PrivacyPolicyComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HomeModule,
		SharedModule,
		AppRoutingModule
	],
	providers: [
		AppService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
