import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { VideoType } from '../models/Video-Type';

@Injectable()
export class ConverterService {

	constructor(private sanitizer: DomSanitizer) { }

	public convertVideoType({tag, content}): VideoType {
		return {
			tag: tag,
			content: this.sanitizer.bypassSecurityTrustHtml(content)
		}
	}

}
