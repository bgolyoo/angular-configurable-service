import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one.component';
import { TestServiceService } from 'app/test-service.service';
import { PageOneRoutingModule } from 'app/page-one/page-one-routing.module';
import { Config } from 'app/config';

const config: Config = {
  messageConfig: 'PAGE-ONE'
}

@NgModule({
  imports: [
    CommonModule,
    PageOneRoutingModule
  ],
  declarations: [PageOneComponent],
  providers: [
    TestServiceService,
    {provide: Config, useValue: config}
  ]
})
export class PageOneModule { }
