import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UiModule } from '@monofunworkspace/ui';
import { ProfilesGridComponent } from './profiles-grid/profiles-grid.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ProfilesGridComponent
      }
    ]),
    UiModule
  ],
  declarations: [ProfilesGridComponent]
})
export class FeatureProfilesGridModule {}
