import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test-comp.component';
import { TileComponent } from './tile/tile.component';
import { TestComponentService } from './test-comp.service';
import { TileComponentService } from './tile/tile.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TestComponentService,
    TileComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
