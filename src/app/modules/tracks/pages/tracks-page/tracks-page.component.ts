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
     this.trackService.getAllTracks$().subscribe((response: TracksModel[]) => {
       //console.log(response);
       this.tracksTrending = response
     })
      this.trackService.getAllRandom$().subscribe((response: TracksModel[]) => {
        this.tracksRandom = response
      })
  }
  
  ngOnDestroy(): void {
    
  }
}
