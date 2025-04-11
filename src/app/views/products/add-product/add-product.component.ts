import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Location } from '@angular/common';
import { StaticTemplateFormComponent } from '../form/form.component';
import { TEMPLATE_FORM_FIELDS } from 'src/app/configs/form-filds.config';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  standalone: true,
  imports: [MatButtonModule, StaticTemplateFormComponent],
})
export class AddProductComponent {
  constructor(private location: Location) {}
  formFields = TEMPLATE_FORM_FIELDS;
  goBack() {
    this.location.back();
  }
}
