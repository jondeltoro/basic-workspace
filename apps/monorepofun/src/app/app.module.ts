import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ProfileStoreModule } from '../../../../libs/profile-store/profile-store.module';
import { UiModule } from '@monofunworkspace/ui';
import { AppComponent } from './app.component';
import { InfoComponent } from './info.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, InfoComponent],
  imports: [
    BrowserModule,
    UiModule,
    HttpClientModule,
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
    ProfileStoreModule,
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
