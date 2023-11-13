import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
import { CallPagComponent } from './call-page/call-page.component';
import { YellPipe } from './features/pipes/yell.pipe';

@NgModule({ 
  declarations: [
    AppComponent,
    CallPagComponent,
    YellPipe
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GifsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
