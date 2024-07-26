import { Box } from "../../shared/Box";
import { useInventory } from "./hooks/useInventory";
import { AddNewProducts } from "./components/AddNewProducts";
import { PRODUCT_ROUTE } from "../../router/routes";
import { Link } from "react-router-dom";
import { InventoryList } from "./components/InventoryList";

export function Inventory() {
  const { data = [], refetch } = useInventory();

  const inventoryArray = Array.from(data);

  return (
    <Box className="m-4 flex flex-col gap-6 max-w-3xl mx-auto">
      <AddNewProducts
        inventory={inventoryArray}
        handleRefetchInventory={refetch}
      />

      <Link
        to={PRODUCT_ROUTE}
        className="text-green-600 hover:text-green-500 hover:underline"
      >
        Add a new product
      </Link>

      <InventoryList inventory={inventoryArray} />
    </Box>
  );
}
