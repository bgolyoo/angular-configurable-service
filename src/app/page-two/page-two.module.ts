import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTwoComponent } from './page-two.component';
import { TestServiceService } from 'app/test-service.service';
import { PageTwoRoutingModule } from 'app/page-two/page-two-routing.module';
import { Config } from 'app/config';

const config: Config = {
  messageConfig: 'PAGE-TWO'
}

@NgModule({
  imports: [
    CommonModule,
    PageTwoRoutingModule
  ],
  declarations: [PageTwoComponent],
  providers: [
    TestServiceService,
    {provide: Config, useValue: config}
  ]
})
export class PageTwoModule { }
