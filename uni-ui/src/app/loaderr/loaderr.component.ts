import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loaderr',
  templateUrl: './loaderr.component.html',
  styleUrls: ['./loaderr.component.scss']
})
export class LoaderrComponent implements OnInit {
@Input() isLoading: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
