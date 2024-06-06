import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {
  public nameLower: string = 'marcela';
  public nameUpper: string = 'MARCELA';
  public fullName: string = 'marCelA truJiLLo TorO';

  public customDate: Date = new Date();
}
