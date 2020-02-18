import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test-comp.component';
import { TileComponent } from './tile/tile.component';
import { TestComponentService } from './test-comp.service';
import { TileComponentService } from './tile/tile.service';
import { MapComponent } from './map/map.component';
import { ControlsComponent } from './controls/controls.component';
import { MiniMapComponent } from './mini-map/mini-map.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TileComponent,
    MapComponent,
    ControlsComponent,
    MiniMapComponent
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
