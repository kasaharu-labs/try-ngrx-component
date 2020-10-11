import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './features/demo/ui/demo/demo.component';
import { HomeComponent } from './features/home/ui/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DemoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
