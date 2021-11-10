import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoService } from './services/demo/demo.service';
import { ClientFormComponent } from './views/components/clients/client-form/client-form.component';
import { ClientPageComponent } from './views/components/clients/client-page/client-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    ClientPageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
