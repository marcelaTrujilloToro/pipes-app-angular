import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
})
export class UncommonPageComponent {
  // i18nSelect
  public name: string = 'Marcela';
  public gender: 'male' | 'female' = 'female';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    this.name = 'Zafiro';
    this.gender = 'male';
  }

  //i18nPlural
  public clientes: string[] = ['Marcela', 'Zharick', 'Ada', 'Zafi', 'Alana'];
  public clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient() {
    this.clientes.pop();
  }

  //key value pipe
  public person = {
    name: 'Marcela',
    age: 33,
    address: 'Manizales',
  };

  // async pipe
  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  });
}
