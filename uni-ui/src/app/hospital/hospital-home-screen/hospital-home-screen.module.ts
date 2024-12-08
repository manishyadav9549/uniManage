import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalHomeScreenComponent } from './hospital-home-screen.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TwoDigitDecimalNumbersDirective } from './two-digit-decimal-numbers.directive';
import { OnlyCharsAndSpacesDirective } from './only-chars-and-spaces.directive';
import { OnlyCharsDirective } from './only-chars.directive';
import { DecimalWithPercentageDirective } from './decimal-with-percentage.directive';
import { NumberOnlyDirective } from './number-only.directive';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [HospitalHomeScreenComponent, TwoDigitDecimalNumbersDirective, OnlyCharsAndSpacesDirective, OnlyCharsDirective, DecimalWithPercentageDirective, NumberOnlyDirective],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    ToastModule
  ]
})
export class HospitalHomeScreenModule { }
