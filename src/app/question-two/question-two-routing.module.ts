import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionTwoComponent } from './question-two.component';

const routes: Routes = [{ path: '', component: QuestionTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionTwoRoutingModule {}
