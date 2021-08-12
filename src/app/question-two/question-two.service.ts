import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionTwoService {
  constructor(private httpClient: HttpClient) {}

  fetch(): Observable<string[]> {
    return this.httpClient.get<string[]>(
      'https://api.publicapis.org/categories'
    );
  }
}
