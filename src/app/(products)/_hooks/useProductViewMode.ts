import { useEffect, useState } from "react";
import { getRandomViewMode } from "@/app/(products)/_utils/getRandomViewMode";
import { ProductViewMode } from "@/app/(products)/_types";

const STORAGE_KEY = "productViewMode";

export const useProductViewMode = (): ProductViewMode | null => {
  const [viewMode, setViewMode] = useState<ProductViewMode | null>(null);

  useEffect(() => {
    const storedViewMode = localStorage.getItem(STORAGE_KEY);
    const now = new Date();

    if (storedViewMode) {
      try {
        const parsed = JSON.parse(storedViewMode);
        const storedDate = new Date(parsed.date);
        const diffInMs = now.getTime() - storedDate.getTime();
        const diffInHours = diffInMs / (1000 * 60 * 60);

        if (diffInHours < 24 && parsed.viewMode) {
          setViewMode(parsed.viewMode);
          return;
        }
      } catch (e) {
        console.error("로컬스토리지 파싱 오류:", e);
      }
    }

    const newViewMode: ProductViewMode = getRandomViewMode();
    setViewMode(newViewMode);

    const newData = {
      viewMode: newViewMode,
      date: now,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  }, []);

  return viewMode;
};
