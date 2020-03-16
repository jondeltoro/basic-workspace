import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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
    ])
  ],
  declarations: [ProfilesGridComponent]
})
export class FeatureProfilesGridModule {}
