import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(private gifService: GifsService) { }

  ngOnInit(): void {
  }
  get resultados() {
    return this.gifService.resultados;
  }
}
