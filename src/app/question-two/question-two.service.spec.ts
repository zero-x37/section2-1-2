/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuestionTwoService } from './question-two.service';

describe('Service: QuestionTwo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionTwoService]
    });
  });

  it('should ...', inject([QuestionTwoService], (service: QuestionTwoService) => {
    expect(service).toBeTruthy();
  }));
});
