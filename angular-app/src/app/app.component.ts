import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  cor = 'vermelho';

  botaoClick(){
    alert('uma mensagem');
    this.cor = (this.cor == 'azul' ? 'vermelho': 'azul') ;
  }
  inputKeyUp(value:any){
    console.log(value.target.value);
  }
}
