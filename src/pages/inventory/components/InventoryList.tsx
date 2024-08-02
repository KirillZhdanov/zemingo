import { Box } from "../../../shared/Box";
import { InventoryItem } from "../../../types/interface";

interface InventoryListProps {
  inventory: InventoryItem[];
}

export function InventoryList({ inventory }: InventoryListProps) {
  const isEmpty = inventory.length === 0;

  return (
    <Box className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold">Inventory list</h2>

      {isEmpty && <p>No items in inventory</p>}

      {!isEmpty && (
        <ul className="flex flex-col gap-4">
          {inventory.map(({ name, quantity }) => (
            <li
              key={name}
              className="p-2 border border-gray-300 rounded-lg flex flex-col gap-2"
            >
              <div className="flex gap-2">
                <span className="text-gray-500">Name:</span>
                <p className="break-all">{name}</p>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500">Quantity:</span>
                <p>{quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
}
