import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  private apiUrl = 'http://localhost:5000/progreso';

  constructor(private http: HttpClient) {}

  getProgress(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
