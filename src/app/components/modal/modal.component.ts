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

  // This method will handle clicks on the overlay (outside the modal)
  onOverlayClick(event: MouseEvent): void {
    // Emit the close event when the overlay is clicked (but not the modal itself)
    this.close.emit();
  }

  // This method will stop the event from propagating when the modal content is clicked
  onModalClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  onSave(): void {
    this.save.emit();
  }
}
