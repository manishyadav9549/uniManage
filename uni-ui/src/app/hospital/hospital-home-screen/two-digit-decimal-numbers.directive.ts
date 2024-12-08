import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTwoDigitDecimalNumbers]'
})
export class TwoDigitDecimalNumbersDirective {
  private regex: RegExp = /^\d*\.?\d{0,2}$/; 
  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value;
    if (!this.regex.test(value)) {
      value = value.slice(0, -1);
    }
    inputElement.value = value;
  }
}
