import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useTitle() {
  const { pathname } = useLocation();

  const getRouteName = () => {
    const route = pathname.split("/").pop();
    const routeName = route
      ? route.charAt(0).toUpperCase() + route.slice(1)
      : "";
    return routeName;
  };

  const routeName = getRouteName();

  useEffect(() => {
    document.title = routeName;
  }, [pathname, routeName]);

  return routeName;
}
