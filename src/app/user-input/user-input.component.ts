import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  inputInitialValue = '0';
  inputAnnualValue = '0';
  inputExpectedReturn = '5';
  inputDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.inputInitialValue,
      duration: +this.inputDuration,
      expectedReturn: +this.inputExpectedReturn,
      annualInvestment: +this.inputAnnualValue,
    });
  }
}
