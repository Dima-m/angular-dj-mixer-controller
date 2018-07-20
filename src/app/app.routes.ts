import { Routes } from '@angular/router';
import { UploaderComponent } from './components/uploader/uploader.component';
import { DjControllerComponent } from './components/dj-controller/dj-controller.component';
import { RouteGuard } from './services/route-guard.service';

export const ROUTES: Routes = [
    { path: 'upload', component: UploaderComponent },
    { path: 'dj-controller', component: DjControllerComponent, canActivate: [RouteGuard] },
];
