import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
 } from '@angular/material';

import { ROUTES } from './app.routes';

import { UploaderComponent } from './components/uploader/uploader.component';
import { DjControllerComponent } from './components/dj-controller/dj-controller.component';
import { PlayerComponent } from './components/dj-controller/player/player.component';
import { PlaylistService } from './services/playlist.service';
import { RouteGuard } from './services/route-guard.service';

@NgModule({
    declarations: [
        AppComponent,
        UploaderComponent,
        DjControllerComponent,
        PlayerComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        BrowserAnimationsModule,
        FormsModule,
        MatIconModule,
        MatSliderModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        MatListModule,
        MatProgressBarModule
    ],
    providers: [
        PlaylistService,
        RouteGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
