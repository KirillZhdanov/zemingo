import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Product {
  name: string;
}

export function useProducts() {
  const baseUrl = import.meta.env.VITE_API_URL;

  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => axios.get(`${baseUrl}/product/all`).then(({ data }) => data),
  });
}
