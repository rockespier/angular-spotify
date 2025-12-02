import { Component, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../../data/tracks.json';

@Component({
  selector: 'app-tracks-page',
  standalone: false,
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit {
  mockTrackList: Array<TracksModel> = [];
  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.mockTrackList = data;
    //  this.loadDataAll() //TODO 📌📌
  } 

  //  async loadDataAll(): Promise<any> {
  //   // this.tracksTrending = await this.trackService.getAllTracks$().toPromise()

  // }
}
