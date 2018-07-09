import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlurayService {
  blurays: Array<any>;

  constructor(private http: HttpClient) { 
  }

  getAllBlurays(): Observable<any> {
  	return this.http.get('//localhost:9191/blurays');
  }

  save(bluray: any): Observable<any> {
  	let result: Observable<Object>;
  	result = this.http.post('//localhost:9191/blurays', bluray);

  	return result;
  }
}
