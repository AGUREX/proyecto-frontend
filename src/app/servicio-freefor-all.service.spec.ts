import { TestBed } from '@angular/core/testing';

import { ServicioFreeforAllService } from './servicio-freefor-all.service';

describe('ServicioFreeforAllService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioFreeforAllService = TestBed.get(ServicioFreeforAllService);
    expect(service).toBeTruthy();
  });
});
