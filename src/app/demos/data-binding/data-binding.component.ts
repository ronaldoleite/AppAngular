import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl:'./data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent  {
    // declarando as variaveis
    public contadorClique: number = 0;
    public urlImage: string = "https://angular.io/assets/images/logos/angular/angular.svg";

    adicionarClique() {
        this.contadorClique++;
    }

}