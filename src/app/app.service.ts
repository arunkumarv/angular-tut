import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  eventemitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  broadcast( msg: string ){
    this.eventemitter.emit(msg);
  }
}
