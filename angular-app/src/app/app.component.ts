import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  cor = 'vermelho';
  valorDigitado = '';

  botaoClick(){
    alert('uma mensagem');
    this.cor = (this.cor == 'azul' ? 'vermelho': 'azul') ;
  }
 /* inputKeyUp(input:any){
    //console.log(value)
    console.log(input.target.value);
    this.valorDigitado = input.target.value;
  }*/
}
