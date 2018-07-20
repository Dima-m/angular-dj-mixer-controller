import { Injectable } from '@angular/core';

export interface Track {
    file: File;
    url: string;
}

@Injectable()
export class PlaylistService {
    private playlistA: Track[] = [];
    private playlistB: Track[] = [];

    public getPlaylists(playlist: string) {
        return this[`${playlist}`];
    }

    public addTrack(file: any, playlist: string) {
        this[`${playlist}`].push({
            file,
            url: window.URL.createObjectURL(file)
        });
    }

    public getTrack(playlist: any, i: number) {
        return new Audio(playlist[i].url);
    }

    public deleteTrack(i: number, playlist: string) {
        window.URL.revokeObjectURL(this[`${playlist}`][i].url);
        this[`${playlist}`].splice(i, 1);
    }
}
