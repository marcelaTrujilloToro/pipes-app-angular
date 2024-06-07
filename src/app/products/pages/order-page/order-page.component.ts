import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
})
export class OrderPageComponent {
  public isUpperCase: boolean = false;
  public sortBy?: keyof Hero;

  public heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'Batman', canFly: false, color: Color.black },
    { name: 'Daredevil', canFly: false, color: Color.red },
    { name: 'Robin', canFly: false, color: Color.red },
    { name: 'Linterna verde', canFly: true, color: Color.green },
  ];

  toggelUperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.sortBy = value;
  }
}
