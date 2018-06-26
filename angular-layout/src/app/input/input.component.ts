import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() public labelName: string;
  @Input() public type: string;
  @Input() public placeholder: string;
  @Input() public name: string;

  constructor() { }

  ngOnInit() {
  }

}
