export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string | string[];
  published: string;
}
