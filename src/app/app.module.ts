import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSlidersComponent } from './image-sliders/image-sliders.component';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSlidersComponent,
    HowToApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
