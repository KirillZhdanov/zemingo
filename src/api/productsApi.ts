import axios from "axios";

export async function createProduct(productName: string) {
  const baseUrl = import.meta.env.VITE_API_URL;

  return axios
    .put(`${baseUrl}/product`, {
      name: productName,
    })
    .then(({ data }) => data);
}


export async function fetchProducts() {
  const baseUrl = import.meta.env.VITE_API_URL;

  return axios.get(`${baseUrl}/product/all`).then(({ data }) => data);
}