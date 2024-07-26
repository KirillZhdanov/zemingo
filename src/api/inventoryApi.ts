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
  return axios
    .post("http://184.73.145.4:8085" + "/inventory", [
      ...inventory,
      {
        name: productName,
        quantity: quantity,
      },
    ])
    .then(({ data }) => data);
}
