import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProfileState } from './../feature-profile-details/src/lib/models/profile-state.model';
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
