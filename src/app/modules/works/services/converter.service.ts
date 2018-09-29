import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class ConverterService {

	constructor(private sanitizer: DomSanitizer) { }

	public convertToSafeUrl(works) {
		return works.map(
			work => Object.assign(work, {videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl(work.videoUrl)})
		)
	}

}
