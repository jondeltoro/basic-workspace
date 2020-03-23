import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import {
  UserProfile,
  ProfileState
} from '@monofunworkspace/feature-profile-details';
import * as profileListActions from '../../../../profile-store/profile-list.actions';
import { profileFeatureKey } from '../../../../profile-store/profile.reducers';

@Component({
  selector: 'monofunworkspace-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent implements OnInit, OnDestroy {
  userProfileListSelector$: Observable<ProfileState>;
  userProfileListSelectorSubscription: Subscription;
  userProfileList: UserProfile[] = null;

  constructor(private store: Store<any>, private router: Router) {
    this.userProfileListSelector$ = store.select(profileFeatureKey);
    store.dispatch(profileListActions.getProfileList());
  }

  ngOnInit() {
    this.userProfileListSelectorSubscription = this.userProfileListSelector$.subscribe(
      profileState => (this.userProfileList = profileState.userProfileList)
    );
  }

  ngOnDestroy() {
    this.userProfileListSelectorSubscription.unsubscribe();
  }

  handleProfileSelection(userId) {
    this.router.navigate(['/profile-details', userId]);
  }
}
