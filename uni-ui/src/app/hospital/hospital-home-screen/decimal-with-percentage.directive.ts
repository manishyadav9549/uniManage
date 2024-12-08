import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[DecimalWithPercentage]'
})
export class DecimalWithPercentageDirective {
  private regex: RegExp = /^\d*\.?\d{0,2}$/;
  private maxValue: number = 100;

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value;
    let isPercentage = value.includes('%');
    value = value.replace('%', '');
    if (!this.regex.test(value) || parseFloat(value) > this.maxValue) {
      value = value.slice(0, -1);
    }
    inputElement.value = value + (isPercentage ? '%' : '');
  }

  @HostListener('blur', ['$event'])
  onBlur(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value.replace('%', '');
    if (value !== '') {
      const numericValue = parseFloat(value);
      if (Number.isInteger(numericValue)) {
        value = numericValue.toString();
      }
      inputElement.value = value + '%';
    }
  }
}
