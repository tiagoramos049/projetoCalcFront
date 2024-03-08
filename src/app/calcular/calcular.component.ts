import { Component } from '@angular/core';
import { calculatorService } from './calculatorService';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrl: './calcular.component.scss'
})
export class calcularComponent {
  value1: number = 0;
  value2: number = 0;
  operation: string = "";
  result: number = 0;
  errorMessage: string = ""; 
  
  constructor(private calculatorService: calculatorService){}

  calculate(): void {
    if (!this.operation) { 
      this.errorMessage = 'Por favor, preencha o campo de operação.'; 
      return; // Encerra a função aqui se o campo de operação estiver vazio
    }
    this.calculatorService.calculate(this.value1, this.value2, this.operation)
      .subscribe(result => {
        this.result = result;
      });
  }
}
