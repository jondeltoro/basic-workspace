import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProfileState } from '@monofunworkspace/feature-profile-details';
import { profileFeatureKey } from './profile.reducers';

export const getUserProfileState = createFeatureSelector<ProfileState>(
  profileFeatureKey
);

export const getUserProfile = createSelector(
  getUserProfileState,
  ({ userProfile }) => {
    return userProfile;
  }
);
