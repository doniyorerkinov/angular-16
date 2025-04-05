import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLineThrough]',
  standalone: true,
})
export class LineThroughDirective implements OnInit {
  @Input() appLineThrough: boolean = false; // Default value is false

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.updateTextDecoration();
  }

  ngOnChanges() {
    this.updateTextDecoration(); // Update when input changes
  }

  private updateTextDecoration() {
    if (this.appLineThrough) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
    }
  }
}
