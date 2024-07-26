import axios from "axios";
import { InventoryItem } from "../pages/inventory/hooks/useInventory";

interface AddInventoryItemProps {
  productName: string;
  quantity: number;
  inventory: InventoryItem[];
}

export async function addInventoryItem({
  productName,
  quantity,
  inventory,
}: AddInventoryItemProps) {
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
