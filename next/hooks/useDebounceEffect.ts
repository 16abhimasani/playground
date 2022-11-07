import { useEffect } from "react";

export const useDebounceEffect = (effect: () => any, deps: any[] = [], delay: number) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);
    return () => clearTimeout(handler);
  }, [...deps, delay]);
};