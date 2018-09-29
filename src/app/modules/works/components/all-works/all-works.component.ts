import { Component, OnInit, ViewChild } from '@angular/core';
import { WorksService } from '../../services/works.service';
import { ModalWindowService } from '../../../shared/services/modal-window.service';

@Component({
	selector: 'all-works',
	templateUrl: './all-works.component.html',
	styles: []
})
export class AllWorksComponent implements OnInit {

	@ViewChild('videoFrame') videoFrame;

	constructor(
		public worksService: WorksService,
		private modalService: ModalWindowService
	) { }

	public allVideosModalId = 'allVideosModal';
	public activeVideo = {};

	ngOnInit() {
		this.worksService.getAllWorks();
	}

	public activateVideo(video): void {
		this.activeVideo = video;
		this.modalService.open(this.allVideosModalId);
	}

	public isOpenedModal():boolean {
		return this.modalService.isOpened(this.allVideosModalId);
	}


}
