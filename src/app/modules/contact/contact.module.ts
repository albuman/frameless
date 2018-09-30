import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactRoutingModule} from './contact-routing.module';
import {SharedModule} from '../shared/shared.module';


import {ContactComponent} from './contact.component';
import {PartnerFormComponent} from './components/partner-form/partner-form.component';


@NgModule({
	imports: [
		CommonModule,
		ContactRoutingModule,
		SharedModule
	],
	declarations: [
		ContactComponent,
		PartnerFormComponent
	]
})
export class ContactModule {
}
