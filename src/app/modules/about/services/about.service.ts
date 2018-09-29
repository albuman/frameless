import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import API from '../../../constants/API';
import { Observable } from 'rxjs/Observable';
import { TeamMember } from '../models/TeamMember';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AboutService {
	public teamMembers:  BehaviorSubject<TeamMember[]> = new BehaviorSubject(<TeamMember[]>[]);

	constructor(private http: HttpClient) { }

	public getTeamMembers() {
		this.http.get(API.GET_TEAM_MEMBERS).subscribe(
			(teamMembers: TeamMember[]) => this.teamMembers.next(teamMembers)
		);
	}
}
