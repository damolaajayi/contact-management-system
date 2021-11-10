import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoService } from './services/demo/demo.service';
import { DamolaComponent } from './views/components/damola/damola.component';


@NgModule({
  declarations: [
    AppComponent,
    DamolaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
