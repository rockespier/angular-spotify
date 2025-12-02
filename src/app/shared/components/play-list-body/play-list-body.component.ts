import { Component, OnInit, Input } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  standalone: false,
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent implements OnInit {

  tracks: TracksModel[] = [];
  
  constructor() {}

  ngOnInit(): void {
    const { data }:any = (dataRaw as any).default;
    this.tracks = data;
  }
}
