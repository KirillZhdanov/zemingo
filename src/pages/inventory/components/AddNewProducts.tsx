import Select, { SelectInstance } from "react-select";
import { Box } from "../../../shared/Box";
import { Button } from "../../../shared/Button";
import { useEffect, useRef } from "react";
import { Notification } from "../../../shared/Notification";
import errorLogo from "../../../assets/error.svg";
import { useProductsStore } from "../../../store/useProductsStore";
import { InventoryItem } from "../../../types/interface";
import { useInventoryStore } from "../../../store/useInventoryStore";

interface AddNewProductsProps {
  inventory: InventoryItem[];
}

export function AddNewProducts({ inventory }: AddNewProductsProps) {
  const selectRef = useRef<SelectInstance>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { isError, handleAddInventory } = useInventoryStore();

  const { products, isLoading, handleFetchProducts } = useProductsStore();

  useEffect(() => {
    handleFetchProducts();
  }, [handleFetchProducts]);

  const options = products?.map(({ name }) => ({ value: name, label: name }));

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

    handleAddInventory({
      productName,
      quantity: Number(quantity),
      inventory: filteredInventory,
      onSuccess: () => {
        selectRef.current?.clearValue();
        formRef.current?.reset();
      },
      onError: () => {
        console.error("Error adding product to inventory");
      },
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
        {isError && (
          <Notification
            text="Error adding product to inventory"
            variant="error"
            icon={<img src={errorLogo} alt="Error logo" />}
          />
        )}
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
