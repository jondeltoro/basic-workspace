import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@monofunworkspace/feature-profile-details';

export const getProfile = createAction(
  '[Profile Details Component] Get user profile request',
  props<{ userId: number; userProfileList?: UserProfile[] }>()
);

export const getRandomProfile = createAction(
  '[Profile Details Component] Get random user profile request'
);

export const getProfileSuccess = createAction(
  '[Profile Details Component] Get user profile request success',
  props<{ profile: UserProfile }>()
);

export const getProfileError = createAction(
  '[Profile Details Component] Get user profile request error',
  props<{ error: Error }>()
);

export const resetProfile = createAction(
  '[Profile Details Component] Reset selected profile'
);
