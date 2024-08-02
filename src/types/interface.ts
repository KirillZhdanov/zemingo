export interface InventoryItem {
  name: string;
  quantity: number;
}

export interface Product {
  name: string;
}

export type WithRequestCallbacks<T> = T & {
  onSuccess: () => void;
  onError: () => void;
};