import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  /*
   * Handles the submission of user input data.
   * This method is triggered when the user submits the form.
   * It processes the input data and performs necessary actions.
   *
   * @returns {void} This method does not return a value.
   */
  onSubmit() {
    console.log('Works');
  }
}
