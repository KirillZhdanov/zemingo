import { create } from "zustand";
import { createProduct, fetchProducts } from "../api/productsApi";

import type { Product, WithRequestCallbacks } from "../types/interface";

interface CreateProductParams {
  newProduct: string;
}

type ProductStore = {
  products: Product[];
  isLoading: boolean;
  handleCreateProduct: (
    params: WithRequestCallbacks<CreateProductParams>
  ) => void;
  handleFetchProducts: () => void;
};

export const useProductsStore = create<ProductStore>((set) => ({
  products: [],
  isLoading: false,
  handleCreateProduct: async ({ newProduct, onSuccess, onError }) => {
    try {
      const data = await createProduct(newProduct);
      set(() => ({ products: [data] }));
      onSuccess();
    } catch (error) {
      onError();
    }
  },
  handleFetchProducts: async () => {
    set({ isLoading: true });
    const response = await fetchProducts();
    const data = Array.from(response ?? []) as Product[];
    set({ products: data, isLoading: false });
  },
}));
