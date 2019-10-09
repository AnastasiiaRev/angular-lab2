import { Component } from '@angular/core';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
  name: 'Multiplier'
 })

export class MultiplierPipe implements PipeTransform {
  transform(value: number, multiply: string): number {
    let mul = parseFloat(multiply);
    return mul * value;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello';
}
