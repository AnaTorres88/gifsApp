// Imports. Angular testing tools y componentes
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Describe. Representa la test suite para AppComponent. Puede contener código adicional que usaremos para testear.
// Ej. Referencias a servicios, espías, mocks.
describe('AppComponent', () => {
  // Before each: función global de Jasmine. Aquí se crea un modulo de tesing. Crea una versión de nuestra aplicación de angular para testear la funcionalidad del componente.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    // Crea una instancia del componente.
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'gifsApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('gifsApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    //Fixture.detectChanges(). Le dice a Angular que detecte los cambios.
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    // Buscamos un elemento que contenga la clase .content span
    expect(compiled.querySelector('.content span').textContent).toContain('gifsApp app is running!');
  });
});
