import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface InventoryItem {
    name: string;
    quantity: number;
}

export function useInventory() {
  const baseUrl = import.meta.env.VITE_API_URL;

  return useQuery<InventoryItem[]>({
    queryKey: ["inventory"],
    queryFn: () => axios.get(`${baseUrl}/inventory`).then(({ data }) => data),
  });
}
