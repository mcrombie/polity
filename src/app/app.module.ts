import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test-comp.component';
import { TileComponent } from './tile/tile.component';
import { TestComponentService } from './test-comp.service';
import { TileComponentService } from './tile/tile.service';
import { PolityComponent } from './polity/polity.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TileComponent,
    PolityComponent,
    MapComponent
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
