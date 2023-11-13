import { TestBed } from '@angular/core/testing';

import { WindowService } from './window-service.service';
import { DOCUMENT } from '@angular/common';

describe('WindowService', () => {
  let service: WindowService;

  beforeEach(() => {
    const documentMock: Document = <any> {
      defaultView: {
        someWindowKey: 'someValue',
      }
    }
    TestBed.configureTestingModule({
      providers: [ {
        provide: DOCUMENT,
        useValue: documentMock
      }]

    });
    service = TestBed.inject(WindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /* testea que retorne algo, ese algo es el objeto Window */
  it('Returns window object', () => {
     const actual = service.getWindowObject();
     expect(actual).not.toBeUndefined();
  })
});
