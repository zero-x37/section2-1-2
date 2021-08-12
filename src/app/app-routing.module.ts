import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'question-1',
        pathMatch: 'full',
      },
      {
        path: 'question-1',
        loadChildren: () =>
          import('./question-one/question-one.module').then(
            (m) => m.QuestionOneModule
          ),
      },
      {
        path: 'question-2',
        loadChildren: () =>
          import('./question-two/question-two.module').then(
            (m) => m.QuestionTwoModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
