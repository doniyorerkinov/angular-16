import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IFormField } from 'src/app/interfaces';

@Component({
  selector: 'template-form',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class StaticTemplateFormComponent {
  @Input() formFields: IFormField[] = [];
  formData: any = {};

  // Called when the form is submitted
  onSubmit(form: any) {
    console.log('Form Submitted!', this.formData);
  }
}
