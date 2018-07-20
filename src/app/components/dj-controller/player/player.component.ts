import {
    Component,
    OnDestroy,
    OnInit,
    Input,
    Output,
    OnChanges,
    SimpleChanges,
    EventEmitter 
} from '@angular/core';
import { Track, PlaylistService } from '../../../services/playlist.service';

@Component({
    selector: 'player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnDestroy, OnInit, OnChanges {
    @Input() playlist: Track[];
    @Input() genVolume: number;
    @Input() title: string;
    @Output() onStatusChanged: EventEmitter<any> = new EventEmitter<any>();

    private track;
    private currentIndex: number = 0;
    private currentTime: number = 0;
    private trackVolume = 100;
    private status: string;

    constructor(
        private PlaylistService: PlaylistService,
    ) { }

    ngOnInit() {
        if (this.playlist.length) {
          this.onTrackInit(this.currentIndex);
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.genVolume) {
            this.onGenVolumeChange(changes.genVolume.currentValue);
        }
    }

    ngOnDestroy() {
        if (this.track) this.track.pause()
    }

    onTrackInit(index) {
        if (this.playlist.length) {
            this.track = this.PlaylistService.getTrack(this.playlist, index);
        
            this.track.addEventListener('timeupdate', () => {
                this.currentTime = parseInt(this.track.currentTime, 10);
            });
            this.track.addEventListener('ended', () => {
                this.onPlayTrack(this.currentIndex + 1);
            });
        }
    }
    
    onTogglePlayPause() {
        this.status = this.track.paused ? 'playing' : 'paused';
        this.onStatusChanged.emit(this.status);
        
        return this.track.paused ? this.track.play() : this.track.pause();
    }

    onReplay() {
        this.track.currentTime = 0;
    }

    onPlayTrack(index: number) {
        if (!this.playlist[index]) return;

        this.currentIndex = index;
        if (this.track) this.track.pause();
        this.onTrackInit(this.currentIndex);
        this.onTogglePlayPause();
    }

    onVolumeChange(e) {
        this.trackVolume = e.value;
        this.track.volume = e.value / 100 * this.genVolume / 100;
    }

    onGenVolumeChange(value) {
        if (this.track) {
            this.track.volume = value / 100 * this.trackVolume / 100;
        }
    }
}
