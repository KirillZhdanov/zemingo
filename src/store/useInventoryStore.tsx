import { create } from "zustand";
import {
  addInventoryItem,
  AddInventoryItemParams,
  fetchInventory,
} from "../api/inventoryApi";

import type { InventoryItem, WithRequestCallbacks } from "../types/interface";

type InventoryStore = {
  inventory: InventoryItem[];
  isLoading: boolean;
  isError: boolean;
  handleFetchInventory: () => void;
  handleAddInventory: (
    newItem: WithRequestCallbacks<AddInventoryItemParams>
  ) => void;
};

export const useInventoryStore = create<InventoryStore>((set) => ({
  inventory: [],
  isError: false,
  isLoading: false,
  handleAddInventory: async (newItem) => {
    const { onSuccess, onError, ...newItemParams } = newItem;

    try {
      const data = await addInventoryItem(newItemParams);
      const inventoryArray = Array.from(data ?? []) as InventoryItem[];
      set(() => ({ inventory: [...inventoryArray] }));

      onSuccess();
    } catch (error) {
      onError();
    }
  },
  handleFetchInventory: async () => {
    try {
      set({ isLoading: true });
      const data = await fetchInventory();
      const inventoryArray = Array.from(data ?? []) as InventoryItem[];

      set({ inventory: inventoryArray, isLoading: false });
    } catch (error) {
      set({ isError: true });
    } finally {
      set({ isLoading: false });
    }
  },
}));
