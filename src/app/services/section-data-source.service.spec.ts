import { TestBed } from '@angular/core/testing';

import { SectionDataSourceService } from './section-data-source.service';

describe('SectionDataSourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectionDataSourceService = TestBed.get(SectionDataSourceService);
    expect(service).toBeTruthy();
  });
});
