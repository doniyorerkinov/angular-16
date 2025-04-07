import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ISelect } from 'src/app/interfaces';
@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() label: string = '';
  @Input() idKey?: string = '';
  @Input() options: ISelect[] = [];
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  selected: string = '';

  onSelectionChange(): void {
    console.log(this.selected);

    this.onChange.emit(this.selected); // Emit the selected value
  }
}
