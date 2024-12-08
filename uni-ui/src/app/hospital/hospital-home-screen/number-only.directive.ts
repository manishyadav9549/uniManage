import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[NumberOnly]'
})
export class NumberOnlyDirective {

  private regex: RegExp = new RegExp(/^\d+$/);

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const sanitizedValue = inputElement.value.split('').filter(char => this.regex.test(char)).join('');
    inputElement.value = sanitizedValue;
  }


}
