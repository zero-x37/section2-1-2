import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionTwoComponent } from './question-two.component';
import { QuestionTwoRoutingModule } from './question-two-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { QuestionTwoService } from './question-two.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    QuestionTwoRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [QuestionTwoComponent],
  providers: [QuestionTwoService],
})
export class QuestionTwoModule {}
