import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent implements OnInit{
  @Input() label!: string;
  @Input() options!: any[];
  @Input() defaultValue!: any;
  @Output() selectedValue = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelectValue(value: any) {
    this.label = value;
    this.selectedValue.emit(value);
  }
}
