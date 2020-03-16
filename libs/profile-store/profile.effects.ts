import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  withLatestFrom,
  concatMap,
  tap
} from 'rxjs/operators';

import * as profileActions from './profile.actions';
import * as fromProfile from './profile.reducers';
import { ProfileService } from './profile.service';
import {
  UserProfile,
  ProfileState
} from '@monofunworkspace/feature-profile-details';

@Injectable()
export class ProfileEffects {
  getRandomUserProfileRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(profileActions.getRandomProfile),
      switchMap(() => {
        const random = Math.floor(
          Math.random() * this.profileService.maxResults
        );
        return this.handleGetUserProfile(random);
      })
    )
  );

  getUserProfileRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(profileActions.getProfile),
      concatMap(action =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(fromProfile.profileFeatureKey),
              map((res: ProfileState) => res)
            )
          )
        )
      ),
      switchMap(([{ id }, { userProfileList }]) => {
        // check if profile is already in the store (userProfileList)
        if (userProfileList && userProfileList[id]) {
          profileActions.getProfileSuccess({
            profile: userProfileList[id]
          });
        } else {
          // if not in the store then get it using service
          return this.handleGetUserProfile(id);
        }
      })
    )
  );

  private handleGetUserProfile(id: number) {
    return this.profileService.getUserProfiles(id).pipe(
      map((users: UserProfile[]) =>
        profileActions.getProfileSuccess({ profile: users[0] })
      ),
      catchError(error => of(profileActions.getProfileError(error)))
    );
  }

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private profileService: ProfileService
  ) {}
}
//VwithLatestFrom
