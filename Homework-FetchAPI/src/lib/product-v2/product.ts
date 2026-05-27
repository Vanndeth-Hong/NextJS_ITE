export interface ProductType {
  thumbnail: string;
  price: number;
  title: string;
  description: string;
  id: number;
  category?: string;
  rating?: number;
  stock?: number;
  brand?: string;
}
