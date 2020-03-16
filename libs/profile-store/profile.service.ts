// Use the random user generator API found here: https://randomuser.me/ to retrieve data for your services.
// Further documentation for implementation can be found here: https://randomuser.me/documentation#format

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserProfile } from 'libs/feature-profile-details/src/lib/models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  readonly maxResults = 15;

  private params: { [key: string]: string } = {
    inc: 'name,location,email,phone,cell,picture',
    results: String(this.maxResults),
    nat: 'US',
    seed: 'scorpion'
  };

  normalizeRecord(rec: any, index: number): UserProfile {
    return {
      id: index,
      firstName: rec.name.first,
      lastName: rec.name.last,
      city: rec.location.city,
      state: rec.location.state,
      email: rec.email,
      phone: rec.phone,
      cell: rec.cell,
      pictureUrl: rec.picture.thumbnail
    };
  }

  getUserProfiles(id = null) {
    const params = { ...this.params };
    if (id !== null) {
      params.page = String(id);
      params.results = '1';
    }
    return this.http
      .get('/api/profiles', { params })
      .pipe(
        map(({ results }: { results: any[] }) =>
          results.map(this.normalizeRecord)
        )
      );
  }
}
