import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CalculatorService} from './calculator.service';
import {log} from 'util';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  formGroup;
  res;

  constructor(private formBuilder: FormBuilder, private calculatorService: CalculatorService) {
    this.formGroup = this.formBuilder.group({
      number: 0
    });
    this.res = '';
  }

  ngOnInit(): void {
  }

  add(formData): void {
    const num = formData.number;
    this.calculatorService.add(num).subscribe(_ => this.res = 'The result of the addition is to current is ' + _);
  }

  subtract(formData): void {
    const num = formData.number;
    this.calculatorService.subtract(num).subscribe(_ => this.res = 'The result of the subtraction is to current is ' + _);
  }

  accumulate(formData): void {
    const num = formData.number;
    this.calculatorService.accumulate(num).subscribe(_ => this.res = 'Current number is now ' + _);
  }

  accumulateS(formData): void {
    const num = formData.number;
    this.calculatorService.accumulateS(num).subscribe(_ => this.res = 'Current number is now ' + _);
  }

  current(): void {
    this.calculatorService.current().subscribe(_ => this.res = 'Current number is ' + _);
  }

}
