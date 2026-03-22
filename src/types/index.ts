export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  properties?: Record<string, string>;
  stockQuantity: number;
  isActive: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Appointment {
  id: string;
  userId: string;
  readingType: ReadingType;
  scheduledDate: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  message?: string;
  price: number;
}

export type ReadingType = 'Love' | 'Career' | 'Finance' | 'Health';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  category: string;
  tags: string[];
  isPublished: boolean;
  publishedAt?: Date;
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
}
