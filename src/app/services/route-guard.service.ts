import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { PlaylistService } from './playlist.service';

@Injectable()
export class RouteGuard implements CanActivate {

    constructor(
        private PlaylistService: PlaylistService,
    ) { }

    public canActivate(): boolean {
        return Boolean(
            this.PlaylistService.getPlaylists('playlistA').length ||
            this.PlaylistService.getPlaylists('playlistB').length
        )
    }

}
