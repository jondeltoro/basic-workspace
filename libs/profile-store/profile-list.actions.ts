import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@monofunworkspace/feature-profile-details';

export const getProfileList = createAction(
  '[Profile List Component] Get user list request'
);

export const getProfileListSuccess = createAction(
  '[Profile List Component] Get user list request success',
  props<{ profileList: UserProfile[] }>()
);

export const getProfileListError = createAction(
  '[Profile List Component] Get user list request error',
  props<{ error: Error }>()
);

export const resetProfileList = createAction(
  '[Profile List Component] Reset user list'
);
