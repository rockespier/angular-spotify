import { Component, Input, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  standalone: false,
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent {
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<TracksModel> = [] 
  constructor() { }

  ngOnInit(): void {
  }
                                                                                                                                                       
}

