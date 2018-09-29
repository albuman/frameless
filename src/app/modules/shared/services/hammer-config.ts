import {
	HammerGestureConfig,
	HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';

declare var Hammer: any;

export class HammerConfig {

	constructor() { }

	buildHammer(element: HTMLElement) {
		let mc = new Hammer(element, {
			touchAction: "pan-x"
		});
		return mc;
	}
}
