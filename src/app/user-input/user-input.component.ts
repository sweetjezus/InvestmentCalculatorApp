import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  inputInitialValue = signal('0');
  inputAnnualValue = signal('0');
  inputExpectedReturn = signal('5');
  inputDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
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
