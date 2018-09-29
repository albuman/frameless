import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators/delay';
import { map } from 'rxjs/operators/map';
import API from '../../../constants/API';
import { ConverterService } from './converter.service';

@Injectable()
export class VideoService {

	constructor(
		private http: HttpClient,
		private converter: ConverterService
	) { }

	public loadVideo(id): Observable<any> {
		return this.http.get(API.GET_VIDEO_DESCRIPTION, { params: { id: id } });
	}

	public getAllCustomerOrders(): Observable<any> {
		return this.http.get(API.GET_ALL_CUSTOMER_ORDERS).pipe(
			map(videos => this.converter.getConvertedVideos(videos))
		);
	}

}
