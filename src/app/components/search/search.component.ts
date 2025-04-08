import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, FormsModule, MatFormFieldModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() value: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  searchedText: string = '';

  ngOnInit(): void {
    this.searchedText = this.value;
  }

  onSearch() {
    this.search.emit(this.searchedText);
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searchedText = (event.target as HTMLInputElement).value;
      this.search.emit(this.searchedText);
    }
  }

  onClear() {
    this.searchedText = '';
    this.search.emit(this.searchedText);
  }
}
