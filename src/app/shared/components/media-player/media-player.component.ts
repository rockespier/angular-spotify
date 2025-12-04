import { Component, OnDestroy, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: false,
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
mockCover: TracksModel = {
  cover:'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
  album:'Gioli & Assia',
  name:'BEBE Oficial',
  url:`http://localhost/track.mp3`,
  _id:'1',
  duration:'3:45'
}
  listObserver$:Array<Subscription>=[];


  constructor(private multimediaService: MultimediaService){}
  ngOnInit(): void {
  const observer1$ =this.multimediaService.callback.subscribe(
  (response:TracksModel)=>{
      console.log('Reproduciendo desde el Media Player',response);
  })
  this.listObserver$.push(observer1$);  
  }
  ngOnDestroy(): void {
    this.listObserver$.forEach(u=>u.unsubscribe());  
  }
}

