import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class ConverterService {

	constructor(private sanitizer: DomSanitizer) { }

	public getConvertedVideos(videos) {
		return videos.map((video, idx) => {
			if (idx === 0) {
				video.visible = true;
			} else {
				video.visible = false;
			}

			video.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(video.videoUrl);

			return video;
		});
	}

}
