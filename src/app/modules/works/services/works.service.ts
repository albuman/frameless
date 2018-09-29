import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import API from '../../../constants/API';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConverterService } from '../../home/services/converter.service';

@Injectable()
export class WorksService {

	public works: BehaviorSubject<any> = new BehaviorSubject([]);

	constructor(private http: HttpClient,
		private converter: ConverterService) { }

	public getAllWorks() {
		const { GET_ALL_WORKS } = API;

		this.http.get(GET_ALL_WORKS).pipe(
			map(this.converter.getConvertedVideos.bind(this.converter))
		).subscribe(
			works => this.works.next(works)
		);
	}

}
