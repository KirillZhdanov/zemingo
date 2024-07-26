import Select, { SelectInstance } from "react-select";
import { Box } from "../../../shared/Box";
import { useProducts } from "../hooks/useProducts";
import { useMutation } from "@tanstack/react-query";
import { InventoryItem } from "../hooks/useInventory";
import { addInventoryItem } from "../../../api/inventoryApi";
import { Button } from "../../../shared/Button";
import { useRef } from "react";

interface AddNewProductsProps {
  inventory: InventoryItem[];
  handleRefetchInventory: () => void;
}

export function AddNewProducts({
  inventory,
  handleRefetchInventory,
}: AddNewProductsProps) {
  const selectRef = useRef<SelectInstance>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { data: products, isLoading } = useProducts();

  const options = products?.map(({ name }) => ({ value: name, label: name }));

  const { mutate: handleAdd } = useMutation({
    mutationFn: addInventoryItem,
    onSuccess: () => {
      selectRef.current?.clearValue();
      formRef.current?.reset();
      handleRefetchInventory();
    },
    onError: () => {
      console.error("Error adding product to inventory");
    },
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const productName = formData.get("product")?.toString();
    const quantity = parseInt(formData.get("quantity")?.toString() || "");

    if (!productName || quantity < 0) {
      return;
    }

    const filteredInventory = inventory.filter(
      (item) => item.name !== productName
    );

    handleAdd({
      productName,
      quantity: Number(quantity),
      inventory: filteredInventory,
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <form ref={formRef} onSubmit={handleFormSubmit}>
      <Box className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold">
          Add new products to the inventory
        </h2>
        <Select
          ref={selectRef}
          className="basic-single"
          classNamePrefix="select"
          isLoading={isLoading}
          options={options}
          name="product"
          isClearable
          required
        />
        <input
          type="number"
          pattern="[0-9]+"
          step={1}
          min={1}
          placeholder="Quantity"
          name="quantity"
          className="border border-gray-200 p-2 rounded-lg"
          required
        />
        <Button text="Add" />
      </Box>
    </form>
  );
}
