import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import API from '../../../constants/API';
import { VideoType } from '../models/Video-Type';
import { ConverterService } from './converter.service';
import { map } from 'rxjs/operators/map';

@Injectable()
export class VideoTypesService {

	constructor(
		private http: HttpClient,
		private converter: ConverterService
	) { }

	public getExplainerVideo(): Observable<VideoType> {
		return this.http.get(API.GET_EXPLAINER_DESCRIPTION).pipe(
			map((type: any) => this.converter.convertVideoType(type))
		);
	}

}
