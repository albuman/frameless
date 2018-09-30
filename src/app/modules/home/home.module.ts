import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing-module';
import { SharedModule } from '../shared/shared.module';

import { TitleComponent } from './components/title/title.component';

import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';
import { HomeComponent } from './home.component';
import { NavigationListComponent } from './components/navigation-list/navigation-list.component';
import { NavigationItemComponent } from './components/navigation-item/navigation-item.component';

@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule,
		SharedModule
	],
	declarations: [
		HomeComponent,
		TitleComponent,
		CustomerOrdersComponent,
		NavigationListComponent,
		NavigationItemComponent
	],
	providers: [
	]
})
export class HomeModule { }
