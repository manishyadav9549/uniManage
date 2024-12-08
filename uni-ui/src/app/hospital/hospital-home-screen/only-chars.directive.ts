import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[OnlyChars]'
})
export class OnlyCharsDirective {
  private regex: RegExp = /^[a-zA-Z]*$/;

  @HostListener('input', ['$event']) onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const sanitizedValue = inputElement.value.split('').filter(char => this.regex.test(char)).join('');
    inputElement.value = sanitizedValue;
  }

}
