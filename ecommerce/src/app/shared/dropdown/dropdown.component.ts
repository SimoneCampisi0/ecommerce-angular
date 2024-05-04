import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'dropdown-standalone',
  standalone: true,
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
  imports: [
    MatIcon,
    NgForOf,
    NgIf
  ],
})
export class DropdownComponent implements OnInit{
  @Input() labelFromInput!: string;
  label!: string;
  @Input() options!: any[];
  @Input() defaultValue!: any;
  value: any;
  @Output() selectedValue = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.setDefaultValue();
  }

  setDefaultValue() {
    this.value = null;
    this.label = this.labelFromInput
  }


  onSelectValue(value: any) {
    this.label = value;
    this.value = value
    this.selectedValue.emit(this.value);
  }

  onCloseEvent() {
    console.log("close");
    this.setDefaultValue();
  }
}
