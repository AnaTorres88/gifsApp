import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

// Imports
import { GifsService } from '../gifs/services/gifs.service';
describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let gifServiceSpy;
  beforeEach(async () => {
    gifServiceSpy = jasmine.createSpyObj('GifsService', ['buscarGifs']);
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      providers: [ 
        { provide: GifsService,
          useValue: gifServiceSpy
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call gif buscarGifs method from GifService', () => {
    component.buscar('termino');
    expect(gifServiceSpy.buscarGifs).toHaveBeenCalled();
    expect(gifServiceSpy.buscarGifs).toHaveBeenCalledWith('termino');
  });
});
