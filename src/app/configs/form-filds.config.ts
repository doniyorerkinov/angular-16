import { IFormField, ISelect } from '../interfaces';

export const TEMPLATE_FORM_FIELDS: IFormField[] = [
  {
    label: 'Title',
    name: 'title',
    isRequired: true,
    errorText: 'Title is required',
    inputType: 'text',
    placeholder: 'Enter your title',
    type: 'input',
  },
  {
    label: 'Category',
    name: 'category',
    isRequired: false,
    errorText: 'Category is required',
    inputType: 'text',
    placeholder: 'Select your Category',
    type: 'select',
    options: [],
  },
  {
    label: 'Description',
    name: 'description',
    isRequired: false,
    errorText: 'description is required',
    inputType: 'textarea',
    placeholder: 'Enter your description',
    type: 'input',
  },
  {
    label: 'Free',
    name: 'isFree',
    isRequired: false,
    errorText: 'Is Free is required',
    inputType: 'checkbox',
    placeholder: 'IS free',
    type: 'input',
  },
  {
    label: 'Price',
    name: 'price',
    isRequired: true,
    errorText: 'Price is required',
    inputType: 'number',
    placeholder: 'Enter price',
    type: 'input',
  },
  {
    label: 'Discount Percentage',
    name: 'discountPercentage',
    isRequired: true,
    errorText: 'Discount Percentage is required',
    inputType: 'number',
    placeholder: 'Enter discountPercentage',
    type: 'input',
  },
  {
    label: 'Price',
    name: 'price',
    isRequired: true,
    errorText: 'Price is required',
    inputType: 'number',
    placeholder: 'Enter price',
    type: 'input',
  },
  {
    label: 'Discount Percentage',
    name: 'discountPercentage',
    isRequired: true,
    errorText: 'Discount Percentage is required',
    inputType: 'number',
    placeholder: 'Enter discountPercentage',
    type: 'input',
  },
  {
    label: 'Price',
    name: 'price',
    isRequired: true,
    errorText: 'Price is required',
    inputType: 'number',
    placeholder: 'Enter price',
    type: 'input',
  },
  {
    label: 'Discount Percentage',
    name: 'discountPercentage',
    isRequired: true,
    errorText: 'Discount Percentage is required',
    inputType: 'number',
    placeholder: 'Enter discountPercentage',
    type: 'input',
  },
  {
    label: 'SKU',
    name: 'sku',
    isRequired: true,
    errorText: 'sku is required',
    inputType: 'text',
    placeholder: 'SKU',
    type: 'input',
  },
];

export const stock_status: ISelect[] = [
  { value: 'In stock', text: 'In stock' },
  { value: 'Out of stock', text: 'Out of stock' },
  { value: 'Low Stock', text: 'Pre order' },
  { value: 'Discontinued', text: 'Discontinued' },
];
export const return_policy: ISelect[] = [
  { value: 'In stock', text: 'In stock' },
  { value: 'Out of stock', text: 'Out of stock' },
  { value: 'Low Stock', text: 'Pre order' },
  { value: 'Discontinued', text: 'Discontinued' },
];
