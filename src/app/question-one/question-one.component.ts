import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.scss'],
})
export class QuestionOneComponent implements OnInit {
  form: FormGroup;
  answer: boolean;

  constructor() {
    this.form = new FormGroup({
      option: new FormControl('prime'),
      value: new FormControl(),
    });
    this.answer = false;
  }

  ngOnInit(): void {
    this.form.get('value')?.valueChanges.subscribe({
      next: (value) => {
        this.checkValue(value);
      },
    });
  }

  checkValue(value: number): void {
    if ((!value && value !== 0 && value !== null) || value < 0) {
      this.form.patchValue(
        {
          value: 1,
        },
        { emitEvent: false }
      );
    } else {
      if (value >= 0) {
        this.form.patchValue(
          {
            value: Math.round(value),
          },
          { emitEvent: false }
        );
      }
    }

    this.onSelectChange(this.form.value.option);
  }

  onSelectChange(event: string): void {
    const value = this.form.value.value;

    if (typeof value == 'number') {
      switch (event) {
        case 'prime': {
          this.answer = this.checkPrime(value);
          break;
        }
        case 'fibo': {
          console.log(this.checkFibo(value), value);

          this.answer = this.checkFibo(value);
          break;
        }
        default: {
          return;
        }
      }
    }
  }

  private checkPrime(num: number): boolean {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  private checkFibo(value: number): boolean {
    let a = 5 * Math.pow(value, 2) + 4;
    let b = 5 * Math.pow(value, 2) - 4;

    let result = Math.sqrt(a) % 1 == 0;
    let res = Math.sqrt(b) % 1 == 0;

    if (result || res == true) {
      return true;
    } else {
      return false;
    }
  }
}
