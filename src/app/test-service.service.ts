import { Injectable } from '@angular/core';
import { Config } from 'app/config';

@Injectable()
export class TestServiceService {

  private _message = 'Default message!';

  set message(message: string) {
    this._message = message;
  }

  get message(): string {
    return this._message;
  }

  constructor(private config: Config) {
    this.message = this.config.messageConfig ? this.config.messageConfig : this.message;
  }

}
