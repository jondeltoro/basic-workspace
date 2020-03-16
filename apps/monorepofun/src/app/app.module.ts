import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from '../../../../libs/ui/src';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InfoComponent } from './info.component';

@NgModule({
  declarations: [AppComponent, InfoComponent],
  imports: [
    BrowserModule,
    UiModule,
    MatToolbarModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          component: InfoComponent
        },
        {
          path: 'profiles-grid',
          pathMatch: 'full',
          loadChildren: () =>
            import('@monofunworkspace/feature-profiles-grid').then(
              module => module.FeatureProfilesGridModule
            )
        },
        {
          path: 'profile-details',
          pathMatch: 'full',
          loadChildren: () =>
            import('@monofunworkspace/feature-profile-details').then(
              module => module.FeatureProfileDetailsModule
            )
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
