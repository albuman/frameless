import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators/map';
import API from '../constants/API';
import {ConverterService} from './converter.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {CustomerOrder} from '../models/CustomerOrder';

@Injectable()
export class VideoService {
	public orders = new BehaviorSubject<CustomerOrder[]>(<CustomerOrder[]>[]);

	constructor(private http: HttpClient,
				private converter: ConverterService) {
	}

	public loadVideo(id): Observable<any> {
		return this.http.get(API.GET_VIDEO_DESCRIPTION, {params: {id: id}});
	}

	public getAllCustomerOrders(): Observable<any> {
		return this.http.get(API.GET_ALL_CUSTOMER_ORDERS).pipe(
			map(videos => this.converter.getConvertedVideos(videos))
		);
	}

}
