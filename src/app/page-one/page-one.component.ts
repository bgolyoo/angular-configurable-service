import { Component, OnInit } from '@angular/core';
import { TestServiceService } from 'app/test-service.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  constructor(private ts: TestServiceService) { }

  ngOnInit() {
    // this.ts.message = 'Hello from page one!';
  }

}
