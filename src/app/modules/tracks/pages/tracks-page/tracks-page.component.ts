import { Component, OnDestroy, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tracks-page',
  standalone: false,
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TracksModel> = [];
  tracksRandom: Array<TracksModel> = [];
  listObservables$: Array<Subscription> = [];

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {            
    this.loadData();
    this.loadDataRamdom();
  }
  
  async loadData(): Promise<void> {
     this.tracksTrending = await this.trackService.getAllTracks$().toPromise();
     
  }

  loadDataRamdom(): void {
    const subRandom = this.trackService.getAllRandom$()
      .subscribe((response: TracksModel[]) => {
        this.tracksRandom = response;
      }, error => {
        console.log('Error loading random tracks', error);
      })
    }

  ngOnDestroy(): void {
    
  }
}
