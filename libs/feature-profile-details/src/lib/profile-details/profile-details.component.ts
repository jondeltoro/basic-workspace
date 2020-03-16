import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as profileActions from '../../../../profile-store/profile.actions';
import { profileFeatureKey } from '../../../../profile-store/profile.reducers';
import { Observable, Subscription } from 'rxjs';
import { UserProfile } from '../models';
import { ProfileState } from '../models/profile-state.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'monofunworkspace-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit, OnDestroy {
  userProfileSelector$: Observable<ProfileState>;
  userProfile: UserProfile = null;
  userProfileSelectorSubscription: Subscription;

  constructor(private store: Store<any>, activatedroute: ActivatedRoute) {
    this.userProfileSelector$ = store.select(profileFeatureKey);

    const id = activatedroute.snapshot.params.id;
    if (!id) {
      store.dispatch(profileActions.getRandomProfile());
    } else {
      store.dispatch(profileActions.getProfile({ id }));
    }
  }

  ngOnInit() {
    this.userProfileSelectorSubscription = this.userProfileSelector$.subscribe(
      profileState => (this.userProfile = profileState.userProfile)
    );
  }

  ngOnDestroy() {
    this.userProfileSelectorSubscription.unsubscribe();
    this.store.dispatch(profileActions.resetProfile());
  }
}
