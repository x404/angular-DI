import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class CounterService {
  private counter: number = 0;

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

  getValue(){
    return this.counter;
  }

  constructor() {
  }
}
