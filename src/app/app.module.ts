import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NgChartsModule } from 'ng2-charts';
import { GraficaComponent } from './components/grafica/grafica.component';

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} }; 

@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule, 
    SocketIoModule.forRoot(config),
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
