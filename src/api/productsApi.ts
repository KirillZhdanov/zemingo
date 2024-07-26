import axios from "axios";

export async function createProduct(productName: string) {
  return axios
    .put("http://184.73.145.4:8085" + "/product", {
      name: productName,
    })
    .then(({ data }) => data);
}
