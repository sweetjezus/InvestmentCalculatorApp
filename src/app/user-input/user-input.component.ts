import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();

  inputInitialValue = signal('0');
  inputAnnualValue = signal('0');
  inputExpectedReturn = signal('5');
  inputDuration = signal('10');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.inputInitialValue(),
      duration: +this.inputDuration(),
      expectedReturn: +this.inputExpectedReturn(),
      annualInvestment: +this.inputAnnualValue(),
    });
    this.inputInitialValue.set('0');
    this.inputAnnualValue.set('0');
    this.inputExpectedReturn.set('5');
    this.inputDuration.set('10');
  }
}
