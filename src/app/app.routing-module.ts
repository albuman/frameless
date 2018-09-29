import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: './modules/home/home.module#HomeModule'
	},
	{
		path: 'our-works',
		loadChildren: './modules/works/works.module#WorksModule'
	},
	{
		path: 'about',
		loadChildren: './modules/about/about.module#AboutModule'
	},
	{
		path: 'contact',
		loadChildren: './modules/contact/contact.module#ContactModule'
	},
	{
		path: 'privacy-policy',
		component: PrivacyPolicyComponent
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'home'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
