import { Component, OnInit } from '@angular/core';
import { UserProfile } from '@monofunworkspace/feature-profile-details';

@Component({
  selector: 'monofunworkspace-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent implements OnInit {
  userProfileList: UserProfile[] = null;

  constructor() {}

  ngOnInit(): void {}
}
