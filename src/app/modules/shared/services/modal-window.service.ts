import { Injectable } from '@angular/core';
import { ModalWindowComponent } from '../components/modal-window/modal-window.component';
import {getScrollTop} from "../../../utils/scrollMeasures";

@Injectable()
export class ModalWindowService {

	private modals: ModalWindowComponent[] = [];
	private opened: ModalWindowComponent[] = [];

	private disableScrollClass = 'disable-scroll';
	private pageScrolled = null;

	constructor() { }

	public add(modalWindow: ModalWindowComponent): void {
		this.modals.push(modalWindow);
	}

	public removeFromOpened(id: string): void {
		this.opened = this.opened.reduce((modals, modal) => {
			if (modal.getId() === id) {
				return modals;
			}

			modals.push(modal);

			return modals;
		}, []);

		if(this.opened.length === 0) {
			this.toggleScroll(false);
		}
	}

	public remove(id: string): void {
		this.modals = this.modals.reduce((modals, modal) => {
			if (modal.getId() === id) {
				return modals;
			}

			modals.push(modal);

			return modals;
		}, []);
	}

	public open(id: string): void {
		
		if(this.opened.length === 0) {
			this.toggleScroll(true);
		}

		this.modals.forEach( modal => {
			if(modal.getId() === id) {
				modal.open();
				this.opened.push(modal);
			}
		});
	}

	public close(id: string): void {
		this.modals.forEach( modal => {
			if(modal.getId() === id) {
				modal.close();
				this.removeFromOpened(id);
			}
		});
	}

	private toggleScroll(toggle: boolean) {
		if(toggle) {
			//save page scrolling coordinates
			this.pageScrolled = getScrollTop();
			document.body.classList.add(this.disableScrollClass);
			document.body.style.top = `-${this.pageScrolled}px`;
		} else {
			//reset coordinates
			document.body.classList.remove(this.disableScrollClass);
			document.body.style.top = '';
			document.documentElement.scrollTop = this.pageScrolled;
			this.pageScrolled = null;
		}
	}

	public getModal(modalWindowId: string) {
		return this.modals.reduce((memo: ModalWindowComponent, modal: ModalWindowComponent) => {
			if(modal.id === modalWindowId) {
				memo = modal;
			}

			return memo;
		});
	}

	public isOpened(modalWindowId: string) {
		const modal: ModalWindowComponent = this.getModal(modalWindowId);

		return modal ? !modal.isClosed() : false;
	}

}
