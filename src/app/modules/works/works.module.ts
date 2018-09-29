import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { WorksRoutingModule } from './works-routing.module';

import { WorksComponent } from './works.component';
import { AllWorksComponent } from './components/all-works/all-works.component';
import { BrandComponent } from './components/brand/brand.component';
import { EducationalComponent } from './components/educational/educational.component';
import { ExplainerComponent } from './components/explainer/explainer.component';
import { ProductComponent } from './components/product/product.component';
import { SalesComponent } from './components/sales/sales.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { VideoDescriptionComponent } from './components/video-description/video-description.component';

import { WorksService } from './services/works.service';
import { ConverterService } from './services/converter.service';

@NgModule({
	imports: [
		CommonModule,
		WorksRoutingModule,
		SharedModule
	],
	declarations: [
		WorksComponent,
		AllWorksComponent,
		BrandComponent,
		EducationalComponent,
		ExplainerComponent,
		ProductComponent,
		SalesComponent,
		TutorialComponent,
		VideoDescriptionComponent
	],
	providers: [
		WorksService,
		ConverterService
	]
})
export class WorksModule { }
