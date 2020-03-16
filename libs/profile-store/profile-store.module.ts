import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromProfile from './profile.reducers';
import { ProfileEffects } from './profile.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([ProfileEffects]),
    StoreModule.forFeature(fromProfile.profileFeatureKey, fromProfile.reducer)
  ]
})
export class ProfileStoreModule {}
