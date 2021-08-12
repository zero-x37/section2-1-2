import { Component, OnInit } from '@angular/core';
import { QuestionTwoService } from './question-two.service';

@Component({
  selector: 'app-question-two',
  templateUrl: './question-two.component.html',
  styleUrls: ['./question-two.component.scss'],
})
export class QuestionTwoComponent implements OnInit {
  data: string[];
  filterData: string[];
  constructor(private questionTwoService: QuestionTwoService) {
    this.data = [];
    this.filterData = [];
  }

  ngOnInit(): void {
    this.questionTwoService.fetch().subscribe({
      next: (data) => {
        this.data = data;
        this.filterData = data;
      },
    });
  }

  onSearch(value: string): void {
    this.filterData = this.data.filter((data) => {
      const lower = data.toLowerCase();
      return lower.indexOf(value) >= 0;
    });
  }
}
