import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetorderbyidService {
  private apiUrl='http://localhost:3000/products'
  constructor(private http:HttpClient){}

  getDataByIds(ids: number[]): Observable<any[]> {
    // Send a GET request to the API endpoint with IDs as query parameters
    const params = { ids: ids.join(',') }; // Convert the array to a comma-separated string
    return this.http.get<any[]>(`${this.apiUrl}/data`, { params });
  }

}
