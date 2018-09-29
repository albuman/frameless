import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AboutRoutingModule } from './about-routing.module';

import { AboutComponent } from './about.component';
import { TeamComponent } from './components/team/team.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { AboutService } from './services/about.service';

@NgModule({
	imports: [
		CommonModule,
		AboutRoutingModule,
		SharedModule
	],
	declarations: [
		AboutComponent,
		TeamComponent,
		NavigationComponent
	],
	providers: [
		AboutService
	]
})
export class AboutModule { }
