import { ComponentFixture, fakeAsync, tick, flush, TestBed, discardPeriodicTasks } from '@angular/core/testing';

import { GifsPageComponent } from './gifs-page.component';

describe('GifsPageComponent', () => {
  let component: GifsPageComponent;
  let fixture: ComponentFixture<GifsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('test timeout', () => {
    it('Debe ejecutar #mensaje después de 300ms', fakeAsync(() => {
      spyOn(component, 'mensaje'); // espiamos el callback
      component.apareceMensaje();
      fixture.detectChanges();
      tick(299); // 200ms
      expect(component.mensaje).not.toHaveBeenCalled(); // Aún no ha pasado el tiempo para llamar al callback
      tick(1); // 1ms más
      flush(); // Simulamos pasar el tiempo
      expect(component.mensaje).toHaveBeenCalled(); // aserción del callback
      discardPeriodicTasks(); // descartamos estas tareas periódicas de fakeAsync como tick
    }));
  });
});
