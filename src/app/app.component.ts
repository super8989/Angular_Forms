import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'forms';

  @ViewChild('f') signupForm: NgForm;
  @ViewChild('email') emailForm: NgModel;
  defaultQuestion = 'pet';
  answer: string = '';
  genders: string[] = ['male', 'female'];

  SuggestUserName() {
    const suggestedName = 'superuser';

    // Overrides the whole form with new values
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: 'testing',
    //   gender: 'male',
    // });

    // Only fills in the specified input
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
    // console.log(this.signupForm.value);
    // console.log('emailform', this.emailForm);
  }
}
