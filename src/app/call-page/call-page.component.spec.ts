import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallPageComponent } from './call-page.component';
import { WindowService } from '../core/services/window-service.service'; // Servicio

describe('CallPagComponent', () => {
  let component: CallPageComponent;
  let fixture: ComponentFixture<CallPageComponent>;
  let windowServiceSpy: jasmine.SpyObj<WindowService>; // declaramos Espía
  beforeEach(async () => {
    // Espía del servicio Window
    windowServiceSpy = jasmine.createSpyObj('WindowService', ['getWindowObject']);
    await TestBed.configureTestingModule({
      declarations: [ CallPageComponent ],
      providers: [
        {
          provide: WindowService,
          useValue: windowServiceSpy
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe llevar al usuario a una pagina externa', () => {
    // Mock de objecto Window
    const documentMock: Window = <any> {
        location: {
          href: '' 
        }
    };
    windowServiceSpy.getWindowObject.and.returnValue(documentMock);
    component.goToExternalPage();
    // Assert: llamada al spy
    expect(windowServiceSpy.getWindowObject).toHaveBeenCalled();
  });
});
