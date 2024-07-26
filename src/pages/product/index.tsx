import { useMutation } from "@tanstack/react-query";
import { Box } from "../../shared/Box";
import { createProduct } from "../../api/productsApi";
import { Button } from "../../shared/Button";
import { useNavigate } from "react-router-dom";
import { INVENTORY_ROUTE } from "../../router/routes";

export function Product() {
  const navigate = useNavigate();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const productName = formData.get("productName")?.toString();

    if (!productName) {
      return;
    }

    handleCreateProduct(productName);
  };

  const { mutate: handleCreateProduct } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      navigate(INVENTORY_ROUTE);
    },
    onError: () => {
      console.error("Error creating new product");
    },
  });

  return (
    <form onSubmit={handleFormSubmit}>
      <Box className="m-4 flex flex-col gap-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold">Create a new product</h2>
        <input
          type="text"
          placeholder="New product name"
          name="productName"
          className="border border-gray-200 p-2 rounded-lg"
          required
        />
        <Button text="Create Product" />
      </Box>
    </form>
  );
}
