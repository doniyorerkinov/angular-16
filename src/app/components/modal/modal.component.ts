import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [MatIconModule, MatButtonModule, CommonModule],
  standalone: true,
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() showFooter: boolean = true;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  onOverlayClick(event: MouseEvent): void {
    this.close.emit();
  }

  onModalClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  onSave(): void {
    this.save.emit();
  }
}
