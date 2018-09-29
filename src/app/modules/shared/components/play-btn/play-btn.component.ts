import { Component, OnInit, HostBinding } from '@angular/core';
import {animate, state, style} from "@angular/animations";

@Component({
	selector: 'play-btn',
	templateUrl: './play-btn.component.html',
	styles: []
})
export class PlayBtnComponent implements OnInit {
	@HostBinding('class.play-btn') className = true;

	constructor() { }

	ngOnInit() {
	}

}
