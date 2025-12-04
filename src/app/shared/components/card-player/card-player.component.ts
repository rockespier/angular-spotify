import { Component, Input, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  standalone: false,
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit  {
@Input() mode: 'small' | 'big' = 'big';
@Input() track:TracksModel = {_id: '', name: '', album: '',  url: '', cover: '', duration: ''};
  constructor(private multimediaService: MultimediaService){}
  ngOnInit(): void {
  }

  sendPlay(track:TracksModel){
    this.multimediaService.callback.emit(track);
  }
}
