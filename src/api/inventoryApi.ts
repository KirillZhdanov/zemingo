import axios from "axios";

import type { InventoryItem } from "../types/interface";

export interface AddInventoryItemParams {
  productName: string;
  quantity: number;
  inventory: InventoryItem[];
}

export async function addInventoryItem({
  productName,
  quantity,
  inventory,
}: AddInventoryItemParams) {
  const baseUrl = import.meta.env.VITE_API_URL;

  return axios
    .post(`${baseUrl}/inventory`, [
      ...inventory,
      {
        name: productName,
        quantity: quantity,
      },
    ])
    .then(({ data }) => data);
}

export async function fetchInventory() {
  const baseUrl = import.meta.env.VITE_API_URL;

  return axios.get(`${baseUrl}/inventory`).then(({ data }) => data);
}
