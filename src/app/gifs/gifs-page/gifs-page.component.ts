import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html',
  styleUrls: ['./gifs-page.component.css']
})
export class GifsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mensaje(): string {
    return 'HOLA!!!';
  }

  apareceMensaje() {
    setTimeout(() => {
      this.mensaje();
    }, 300);
  }

}
