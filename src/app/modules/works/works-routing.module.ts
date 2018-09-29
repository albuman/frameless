import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorksComponent } from './works.component';
import { AllWorksComponent } from './components/all-works/all-works.component';
import { BrandComponent } from './components/brand/brand.component';
import { EducationalComponent } from './components/educational/educational.component';
import { ExplainerComponent } from './components/explainer/explainer.component';
import { ProductComponent } from './components/product/product.component';
import { SalesComponent } from './components/sales/sales.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

const routes: Routes = [
	{
		path: '',
		component: WorksComponent,
		children: [
			{
				path: 'all',
				component: AllWorksComponent
			},
			{
				path: 'brand',
				component: BrandComponent
			},
			{
				path: 'educational',
				component: EducationalComponent
			},
			{
				path: 'explainer',
				component: ExplainerComponent
			},
			{
				path: 'product',
				component: ProductComponent
			},
			{
				path: 'sales',
				component: SalesComponent
			},
			{
				path: 'tutorial',
				component: TutorialComponent
			},
			{
				path: '',
				redirectTo: 'all',
				pathMatch: 'full'
			},
			{
				path: '**',
				redirectTo: '',
				pathMatch: 'full'
			}
		]
	},
	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule { }
