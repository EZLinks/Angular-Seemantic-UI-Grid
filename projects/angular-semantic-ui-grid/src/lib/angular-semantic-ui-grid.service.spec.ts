import { TestBed } from '@angular/core/testing';

import { AngularSemanticUiGridService } from './angular-semantic-ui-grid.service';

describe('AngularSemanticUiGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularSemanticUiGridService = TestBed.get(AngularSemanticUiGridService);
    expect(service).toBeTruthy();
  });
});
