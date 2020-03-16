import { Action, createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile.actions';
import { ProfileState } from './../feature-profile-details/src/lib/models/profile-state.model';
// import { UserProfile } from 'libs/feature-profile-details/src/lib/models';

export const profileFeatureKey = 'profile';

export const initialState: ProfileState = {
  userProfile: null,
  userProfileList: null
};

const profileReducer = createReducer(
  initialState,
  on(ProfileActions.getProfileSuccess, (state, { profile }) => {
    return { ...state, userProfile: profile };
  }),
  on(ProfileActions.getProfileError, state => {
    return { ...state, userProfile: initialState.userProfile };
  }),
  on(ProfileActions.resetProfile, state => {
    return { ...state, userProfile: initialState.userProfile };
  })
);

export function reducer(state: ProfileState | undefined, action: Action) {
  return profileReducer(state, action);
}
