import { useNavigate } from "react-router-dom";
import { Box } from "../../../shared/Box";
import { Button } from "../../../shared/Button";
import { INVENTORY_ROUTE } from "../../../router/routes";
import { useProductsStore } from "../../../store/useProductsStore";

export function CreateNewProducts() {
  const navigate = useNavigate();

  const { handleCreateProduct } = useProductsStore();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const productName = formData.get("productName")?.toString();

    if (!productName) {
      return;
    }

    handleCreateProduct({
      newProduct: productName,
      onSuccess: () => {
        navigate(INVENTORY_ROUTE);
      },
      onError: () => {
        console.error("Error creating new product");
      },
    });
  };

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
