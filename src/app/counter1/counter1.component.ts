import { Component } from '@angular/core';
import { CounterService } from "../services/counter.service";

@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.css'],
  providers: [CounterService] // данный компонент использует свой экземпляр сервиса
})
export class Counter1Component {

  public counter = 0;

  constructor(private counterService: CounterService) {
  }

  minusOne() {
    this.counterService.decrement();
    this.counter = this.counterService.getValue();
  }

  plusOne() {
    this.counterService.increment();
    this.counter = this.counterService.getValue();
  }
}
