import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { PageOneComponent } from 'app/page-one/page-one.component';

const routes: Route[] = [
  {
    path: '',
    component: PageOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageOneRoutingModule {}
