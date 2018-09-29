import { Component, OnInit, HostBinding } from '@angular/core';
import { VideoTypes } from '../../constants/VideoTypes';
import { ModalWindowService } from '../../services/modal-window.service';

@Component({
	selector: 'video-types',
	templateUrl: './video-types.component.html',
	styles: []
})
export class VideoTypesComponent implements OnInit {
	@HostBinding('class.video-types') className = true;
	
	public videoTypeModalId = 'videoTypeModalId';
	public activeDescription: VideoTypes;
	public videoTypes = {
		explainer:  VideoTypes.EXPLAINER,
		product: VideoTypes.PRODUCT,
		sales: VideoTypes.SALES,
		brand: VideoTypes.BRAND,
		educational: VideoTypes.EDUCATIONAL,
		tutorial: VideoTypes.TUTORIAL
	};

	constructor(private modalService: ModalWindowService) { }

	ngOnInit() { }

	public showVideoTypeDesc(type: VideoTypes) {
		this.activeDescription = type;
		this.modalService.open(this.videoTypeModalId);
	}

}
