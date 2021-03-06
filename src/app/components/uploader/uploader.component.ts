import { Component, OnInit } from '@angular/core';
import { Track, PlaylistService } from '../../services/playlist.service';

@Component({
    selector: 'uploader',
    templateUrl: './uploader.component.html',
    styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
    private playlistA: Track[] = [];
    private playlistB: Track[] = [];
    constructor(private PlaylistService: PlaylistService) { }

    ngOnInit() {
        this.playlistA = this.PlaylistService.getPlaylists('playlistA');
        this.playlistB = this.PlaylistService.getPlaylists('playlistB');
    }

    addTrack(e: any, playlist: string) {
        let file = e.target.files[0];
        this.PlaylistService.addTrack(file, playlist);
    }

    showPlaceholder(playlist: string) {
        return !this[`${playlist}`].length;
    }

    deleteTrack(i: number, playlist: string) {
        this.PlaylistService.deleteTrack(i, playlist);
    }
}
