import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Product {
  name: string;
}

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () =>
      axios
        .get("http://184.73.145.4:8085" + "/product/all")
        .then(({ data }) => data),
  });
}
