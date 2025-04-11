export interface IPagination<T> {
  products: T[];
  total: number;
  skip: number;
  limit: number;
}

export interface IRecipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: IDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IReviews[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: IMeta;
  thumbnail: string;
  images: string[];
}

interface IDimensions {
  width: number;
  height: number;
  depth: number;
}

interface IReviews {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface IMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string | number;
  qrCode: string;
}

export interface ISelect {
  text?: string;
  value: number | string | null;
}

export interface IFormField {
  label: string;
  name: string;
  isRequired: boolean;
  errorText: string;
  inputType: string;
  placeholder: string;
  type?: string;
  options?: ISelect[];
}
