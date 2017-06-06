import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'page-one',
    pathMatch: 'full'
  },
  {
    path: 'page-one',
    loadChildren: 'app/page-one/page-one.module#PageOneModule'
  },
  {
    path: 'page-two',
    loadChildren: 'app/page-two/page-two.module#PageTwoModule'
  },
  {
    path: '**',
    redirectTo: 'page-one'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
