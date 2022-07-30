export interface IProductsInterface {
  id: number;
  image: string;
  name: string;
  price: number;
}

export interface IProductsResponse {
  next: {
    page: number,
    limit: number,
  },
  previous: {
    page: number,
    limit: number,
  },
  results: IProductsInterface[]
}