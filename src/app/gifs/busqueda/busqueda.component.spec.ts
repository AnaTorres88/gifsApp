import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaComponent } from './busqueda.component';
import { GifsService } from '../services/gifs.service'; // importar GifsService
describe('BusquedaComponent', () => {
  let component: BusquedaComponent;
  let fixture: ComponentFixture<BusquedaComponent>;
  let gifServiceSpy: jasmine.SpyObj<GifsService>; // declarar variable para spy
  
  beforeEach(async () => {
    gifServiceSpy = jasmine.createSpyObj('GifsService', ['buscarGifs']); // Espiando el servicio, método buscarGifs
    await TestBed.configureTestingModule({
      declarations: [ BusquedaComponent ],
      providers: [
        { provide: GifsService,
          useValue: gifServiceSpy
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Extraer el valor de un input y hacer búsqueda mediante el método buscarGifs', () => {
    let input;
    let txtBuscar;
    // Antes de cada test, obtenemos el elemento input 
    // Extraemos el valor de ese input
    // llamamos al método buscar
    beforeEach(() => {
      input = HTMLInputElement = fixture.debugElement.nativeElement.querySelector('.form-control');
      txtBuscar = spyOnProperty(component.txtBuscar.nativeElement, 'value');
      spyOn(component, 'buscar').and.callThrough(); // callThrough(). Llama al espía y delega la implementación del método.
    });

    it('valor no está vacío', () => {
      txtBuscar.and.returnValue('gatitos');
      expect(input.value).toEqual('gatitos');
      input.dispatchEvent(new KeyboardEvent('keyup', { code: 'Enter', key: 'Enter', keyCode: 13}));
      fixture.detectChanges();
      expect(component.buscar).toHaveBeenCalled();
      expect(gifServiceSpy.buscarGifs).toHaveBeenCalled();
      txtBuscar.and.returnValue('');
      fixture.detectChanges();
      expect(input.value).toEqual('');
    });

    it('valor está vacío', () => {
      txtBuscar.and.returnValue('');
      expect(input.value).toEqual('');
      input.dispatchEvent(new KeyboardEvent('keyup', { code: 'Enter', key: 'Enter', keyCode: 13}));
      fixture.detectChanges();
      expect(input.value).toEqual('');
      expect(component.buscar).toHaveBeenCalled();
      expect(gifServiceSpy.buscarGifs).not.toHaveBeenCalled(); // El espía no debe ser llamado porque el input está vacío.
    });
  });

});
