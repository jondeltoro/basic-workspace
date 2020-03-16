import { async, TestBed } from '@angular/core/testing';
import { FeatureProfilesGridModule } from './feature-profiles-grid.module';

describe('FeatureProfilesGridModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureProfilesGridModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureProfilesGridModule).toBeDefined();
  });
});
