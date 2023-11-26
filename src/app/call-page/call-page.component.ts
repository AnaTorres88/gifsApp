import { Component, OnInit } from '@angular/core';
import { WindowService } from '../core/services/window-service.service';
/* LLamando a página externa */
@Component({
  selector: 'app-call-page',
  templateUrl: './call-page.component.html',
  styleUrls: ['./call-page.component.css']
})
export class CallPageComponent implements OnInit {

  constructor(private windowService: WindowService) { }

  ngOnInit(): void {
  }
  goToExternalPage() {
    // Nos lleva a una página externa
    this.windowService.getWindowObject().location.href = 'https://www.naughtydog.com/';
  }
}
