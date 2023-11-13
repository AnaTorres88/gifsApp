import { TestBed, fakeAsync, flush } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

const term = 'gatitos';
const expectedUrl = `https://api.giphy.com/v1/gifs/search?api_key=fO0D6I1oyyto2T0Ox6vBBxspAnnJ2rYc&limit=10&q=gatitos`;
// Mock
import { resultados } from 'src/app/test-helpers/resultados';

import { GifsService } from './gifs.service';
import { of } from 'rxjs';
const parsedResultados = JSON.parse(resultados);
describe('GifsService', () => {
    let service: GifsService;
    let httpMock: HttpTestingController;

  beforeEach(async () => {
   
    await TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
        providers: [GifsService],
    })
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(GifsService);
  });

  it('should create', () => {
    localStorage.setItem('resultados', resultados);
    expect(service).toBeTruthy();
  });

  it('callGifsPage, llama a la página de search gif y retorna una respuesta',() => {
    service.callGifsPage('gatitos').subscribe(res => {
      expect(res).toEqual(parsedResultados);
    });
    const req = httpMock.expectOne(req => req.urlWithParams === expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(parsedResultados);
  });

  describe('buscarGifs: realiza una búsqueda de gifs a partir de una string', () => {
    it('Si los resultados de una búsqueda previa están guardados en localStorage', fakeAsync(() => {
        service['resultados'] = parsedResultados;
        spyOnProperty(service, 'historial', 'get').and.returnValue(['gatitos']);
        service['_historial'] = ['gatitos'];
        spyOn(localStorage, 'setItem');
        spyOn(service, 'callGifsPage').and.returnValue(of(parsedResultados));
        service.buscarGifs('gatitos');
        flush();
        service.callGifsPage('gatitos').subscribe((result) => {
          expect(localStorage.setItem).toHaveBeenCalled();
        });
    }));
  
    it('Si los resultados de una búsqueda previa no están guardados en localStorage', fakeAsync(() => {
        spyOnProperty(service, 'historial', 'get').and.returnValue([]);
        service['_historial'] = [];
        spyOn(localStorage, 'setItem');
        spyOn(service, 'callGifsPage').and.returnValue(of(parsedResultados));
        service['resultados'] = undefined;
        service.buscarGifs('perritos');
        flush();
        service.callGifsPage('').subscribe((result) => {
          expect(localStorage.setItem).toHaveBeenCalled();
      });
    }));
  });
});
