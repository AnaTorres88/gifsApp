import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common'; // Usamos DOCUMENT
@Injectable({
  providedIn: 'root'
})
/* Testing friendly: Window service para usar el Objeto window */
export class WindowService {
  private readonly window: Window;

  constructor( @Inject(DOCUMENT ) private document: Document) { 
    this.window = this.document.defaultView;
  }

  getWindowObject() {
    return this.window;
  }
}
