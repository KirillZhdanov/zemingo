import { NavLink, NavLinkRenderProps } from "react-router-dom";
import { INVENTORY_ROUTE, PRODUCT_ROUTE } from "../../router/routes";

export function Header() {
  const handleClassName = ({ isActive }: NavLinkRenderProps) => {
    const itemClassName = isActive
      ? "text-green-600 underline underline-offset-4"
      : "text-gray-600";

    return `${itemClassName} hover:text-green-400 hover:underline hover:underline-offset-4`;
  };

  return (
    <nav className="bg-white shadow-md p-6 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-600">
        Inventory Management
      </h1>
      <ul className="flex gap-5">
        <li>
          <NavLink className={handleClassName} to={INVENTORY_ROUTE}>
            Inventory
          </NavLink>
        </li>
        <li>
          <NavLink className={handleClassName} to={PRODUCT_ROUTE}>
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
