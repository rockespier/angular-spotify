import { TracksModel } from '@core/models/tracks.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrackService {
     private readonly apiUrl = environment.api;

  constructor(private http: HttpClient) {

   }

   private skipById(listTracks: TracksModel[], id: number): Promise<TracksModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  getAllTracks$(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/tracks`)
      .pipe(map(({data}: any) => {
        return data
      })
    )
  }
 
   getAllRandom$(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tracks001`)
      .pipe(
        mergeMap(({ data }: any) => this.skipById(data, 2)),
        // map((dataRevertida) => { //TODO aplicar un filter comun de array
        //   return dataRevertida.filter((track: TrackModel) => track._id !== 1)
        // })
        tap(data => console.log('Random tracks fetched:', data)),
        catchError((err) => {
         console.log('Error fetching random tracks', err);
          return of([])
        })
      )
  }
}