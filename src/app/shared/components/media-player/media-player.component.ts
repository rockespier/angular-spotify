import { Component, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  standalone: false,
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit {
mockCover: TracksModel = {
  cover:'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
  album:'Gioli & Assia',
  name:'BEBE Oficial',
  url:`http://localhost:3000/api/track/stream/1`,
  _id:'1',
  duration:'3:45'
}


  constructor(){}
  ngOnInit(): void {
 
  }
}

