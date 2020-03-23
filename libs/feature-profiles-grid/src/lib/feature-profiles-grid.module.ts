import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UiModule } from '@monofunworkspace/ui';
import { ProfilesListComponent } from './profiles-list/profiles-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ProfilesListComponent
      }
    ]),
    UiModule
  ],
  declarations: [ProfilesListComponent]
})
export class FeatureProfilesGridModule {}
