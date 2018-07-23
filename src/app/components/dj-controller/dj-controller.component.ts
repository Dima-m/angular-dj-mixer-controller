import { Component } from '@angular/core';
import { Track, PlaylistService } from '../../services/playlist.service';

@Component({
    selector: 'dj-controller',
    templateUrl: './dj-controller.component.html',
    styleUrls: ['./dj-controller.component.scss']
})
export class DjControllerComponent {
    private playlistA: Track[];
    private playlistB: Track[];
    private genVolume = 50;
    private isPlaying: boolean;

    constructor(private PlaylistService: PlaylistService) {
        this.playlistA = this.PlaylistService.getPlaylists('playlistA');
        this.playlistB = this.PlaylistService.getPlaylists('playlistB');
    }

    checkStatus(status: string) {
        return this.isPlaying = status === 'playing' || false;
    }

    onTogglePlayPause(playerA: any, playerB: any) {
        if (playerA.playlist.length) playerA.onTogglePlayPause();
        if (playerB.playlist.length) playerB.onTogglePlayPause();
    }
}
