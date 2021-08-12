import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionOneComponent } from './question-one.component';

const routes: Routes = [{ path: '', component: QuestionOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionOneRoutingModule {}
