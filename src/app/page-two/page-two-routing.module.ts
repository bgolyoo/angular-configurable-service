import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { PageTwoComponent } from 'app/page-two/page-two.component';

const routes: Route[] = [
  {
    path: '',
    component: PageTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageTwoRoutingModule {}
