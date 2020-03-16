import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { UiModule } from '@monofunworkspace/ui';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      {
        path: ':id',
        pathMatch: 'full',
        component: ProfileDetailsComponent
      },
      {
        path: '',
        pathMatch: 'full',
        component: ProfileDetailsComponent
      }
    ])
  ],
  declarations: [ProfileDetailsComponent]
})
export class FeatureProfileDetailsModule {}
