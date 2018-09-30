import {Directive, ElementRef, HostListener} from '@angular/core';
import {copyToClipboard} from '../../../../utils/clipborad';

@Directive({
	selector: '[copyToClipboard]'
})
export class CopyToClipboardDirective {

	constructor(private el: ElementRef) {}

	@HostListener('click')
	copy() {
		const textToCopy = this.el.nativeElement.textContent.trim();
		copyToClipboard(textToCopy);
	}

}
