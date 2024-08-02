import { Box } from "../../shared/Box";
import { AddNewProducts } from "./components/AddNewProducts";
import { PRODUCT_ROUTE } from "../../router/routes";
import { Link } from "react-router-dom";
import { InventoryList } from "./components/InventoryList";
import { useInventoryStore } from "../../store/useInventoryStore";
import { useEffect } from "react";

export function Inventory() {
  const { inventory, handleFetchInventory } = useInventoryStore();

  useEffect(() => {
    handleFetchInventory();
  }, [handleFetchInventory]);

  return (
    <Box className="m-4 flex flex-col gap-6 max-w-3xl mx-auto">
      <AddNewProducts inventory={inventory} />

      <Link
        to={PRODUCT_ROUTE}
        className="text-green-600 hover:text-green-500 hover:underline"
      >
        Add a new product
      </Link>

      <InventoryList inventory={inventory} />
    </Box>
  );
}
