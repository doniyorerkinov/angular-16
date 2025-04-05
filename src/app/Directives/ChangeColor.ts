import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true,
})
export class ChangeColorDirective implements OnInit {
  @Input() appChangeColor: string = ''; // Default value is false

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.updateTextColor();
  }

  ngOnChanges() {
    this.updateTextColor(); // Update when input changes
  }

  private updateTextColor() {
    this.el.nativeElement.style.color = this.appChangeColor;
  }
}
