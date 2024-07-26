import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface InventoryItem {
    name: string;
    quantity: number;
}

export function useInventory() {

  return useQuery<InventoryItem[]>({
    queryKey: ["inventory"],
    queryFn: () =>
      axios
        .get('http://184.73.145.4:8085' + "/inventory")
        .then(({ data }) => data),
  });
}
