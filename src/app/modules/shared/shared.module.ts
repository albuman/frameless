/* MODULES */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ScrollbarModule } from 'ngx-scrollbar';
/* END MODULES */

/* COMPONENTS */
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { HelpFormComponent } from './components/help-form/help-form.component';
import { VideoTypesComponent } from './components/video-types/video-types.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { SocialsComponent } from './components/socials/socials.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { PlayBtnComponent } from './components/play-btn/play-btn.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { TermsComponent } from './components/terms/terms.component';
import { ProductComponent } from './components/video-types-description/product/product.component';
import { SalesComponent } from './components/video-types-description/sales/sales.component';
import { ExplainerComponent } from './components/video-types-description/explainer/explainer.component';
import { EducationalComponent } from './components/video-types-description/educational/educational.component';
import { TutorialComponent } from './components/video-types-description/tutorial/tutorial.component';
import { BrandComponent } from './components/video-types-description/brand/brand.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
/* END COMPONENTS */

/* SERVICES */
import { ModalWindowService } from './services/modal-window.service';
/* END SERVICES */

@NgModule({
	imports: [
		CommonModule,
		MatInputModule,
		MatFormFieldModule,
		ScrollbarModule
	],
	declarations: [
		VideoPlayerComponent,
		HelpFormComponent,
		VideoTypesComponent,
		ModalWindowComponent,
		SocialsComponent,
		CheckboxComponent,
		PlayBtnComponent,
		DropdownComponent,
		OrderDetailsComponent,
		TermsComponent,
		ProductComponent,
		SalesComponent,
		ExplainerComponent,
		EducationalComponent,
		TutorialComponent,
		BrandComponent
	],
	exports: [
		MatInputModule,
		MatFormFieldModule,
		ScrollbarModule,
		VideoPlayerComponent,
		HelpFormComponent,
		VideoTypesComponent,
		ModalWindowComponent,
		SocialsComponent,
		CheckboxComponent,
		PlayBtnComponent,
		DropdownComponent,
		OrderDetailsComponent,
		TermsComponent,
		ProductComponent,
		SalesComponent,
		ExplainerComponent,
		EducationalComponent,
		TutorialComponent,
		BrandComponent
	],
	providers: [
		ModalWindowService
	]
})
export class SharedModule { }
