import {SafeResourceUrl} from "@angular/platform-browser";

export interface CustomerOrder {
	videoUrl: SafeResourceUrl;
	name: string;
	tag: string;
	price: string;
	time: string;
	target: string;
	result: string;
	id: number;
}