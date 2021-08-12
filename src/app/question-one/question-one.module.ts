import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionOneComponent } from './question-one.component';
import { QuestionOneRoutingModule } from './question-one-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, QuestionOneRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [QuestionOneComponent],
})
export class QuestionOneModule {}
