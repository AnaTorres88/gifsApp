import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosComponent } from './resultados.component';
import { GifsService } from '../services/gifs.service';
import { of } from 'rxjs';
import { resultados } from 'src/app/test-helpers/resultados'; // Mock
describe('ResultadosComponent', () => {
  let component: ResultadosComponent;
  let fixture: ComponentFixture<ResultadosComponent>;
  let gifsServiceSpy: jasmine.SpyObj<GifsService>; // Servicio
  beforeEach(async () => {
    gifsServiceSpy = jasmine.createSpyObj('GifsService', [], ['resultados']); // Estamos espiando una propiedad
    await TestBed.configureTestingModule({
      declarations: [ ResultadosComponent ],
      providers: [
        {
          provide: GifsService,
          useValue: gifsServiceSpy
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('resultados: debe retornar la propiedad resultados de GifsService', () => {
    const parsedResultados = JSON.parse(resultados);
    (Object.getOwnPropertyDescriptor(gifsServiceSpy, 'resultados')?.get as jasmine.Spy<any>)
    .and.callFake(() => parsedResultados);
    expect(component.resultados).toEqual(parsedResultados);
  });
});
