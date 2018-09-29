import { Component, OnInit, HostListener } from '@angular/core';
import { AboutService } from '../../services/about.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TeamMember } from '../../models/TeamMember';

@Component({
	selector: 'team',
	templateUrl: './team.component.html',
	styles: []
})
export class TeamComponent implements OnInit {

	public teamMembers: BehaviorSubject<TeamMember[]>;

	constructor(private aboutService: AboutService) { }

	ngOnInit() {
		this.teamMembers = this.aboutService.teamMembers;
		this.aboutService.getTeamMembers();
	}

}
