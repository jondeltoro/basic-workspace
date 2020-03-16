import { Action, createReducer, on } from '@ngrx/store';
import * as profileActions from './profile.actions';
import * as profileListActions from './profile-list.actions';
import { ProfileState } from '@monofunworkspace/feature-profile-details';

export const profileFeatureKey = 'profile';

export const initialState: ProfileState = {
  userProfile: null,
  userProfileList: null
};

const profileReducer = createReducer(
  initialState,
  on(profileActions.getProfileSuccess, (state, { profile }) => {
    return { ...state, userProfile: profile };
  }),
  on(profileActions.getProfileError, state => {
    return { ...state, userProfile: initialState.userProfile };
  }),
  on(profileActions.resetProfile, state => {
    return { ...state, userProfile: initialState.userProfile };
  }),
  on(profileListActions.getProfileListSuccess, (state, { profileList }) => {
    return { ...state, userProfileList: profileList };
  }),
  on(profileListActions.getProfileListError, state => {
    return { ...state, userProfileList: initialState.userProfileList };
  }),
  on(profileListActions.resetProfileList, state => {
    return { ...state, userProfileList: initialState.userProfileList };
  })
);

export function reducer(state: ProfileState | undefined, action: Action) {
  return profileReducer(state, action);
}
