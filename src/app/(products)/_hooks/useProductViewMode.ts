import { useCallback, useEffect, useState } from "react";
import { getRandomViewMode } from "@/app/(products)/_utils/getRandomViewMode";
import { ProductViewMode } from "@/app/(products)/_types";

interface ViewModeInfo {
  date: number;
  viewMode: ProductViewMode;
}
const STORAGE_KEY = "productViewMode";
const ONE_DAY_HOURS = 24;
const ONE_HOUS_MS = 1000 * 60 * 60;

export const useProductViewMode = (): ProductViewMode | null => {
  const [viewMode, setViewMode] = useState<ProductViewMode | null>(null);

  const getDiffInHours = useCallback(
    (parsedViewMode: ViewModeInfo, now: number) => {
      const storedDate = new Date(parsedViewMode.date);
      const diffInMs = now - storedDate.getTime();
      return diffInMs / ONE_HOUS_MS;
    },
    []
  );

  const setViewModeInfo = useCallback((now: number) => {
    const newViewMode: ProductViewMode = getRandomViewMode();

    const newData = {
      viewMode: newViewMode,
      date: now,
    };

    setViewMode(newViewMode);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  }, []);

  useEffect(() => {
    const storedViewMode = localStorage.getItem(STORAGE_KEY) as ProductViewMode;
    const now = new Date();

    if (storedViewMode) {
      try {
        const parsedViewMode = JSON.parse(storedViewMode) as ViewModeInfo;
        const diffInHours = getDiffInHours(parsedViewMode, now.getTime());

        if (diffInHours < ONE_DAY_HOURS && parsedViewMode.viewMode) {
          setViewMode(parsedViewMode.viewMode);
          return;
        }
      } catch (e) {
        // wip: 개선 사항으로 스낵바 추가
        console.error("로컬스토리지 파싱 오류:", e);
      }
    }

    setViewModeInfo(now.getTime());
  }, [getDiffInHours, setViewModeInfo]);

  return viewMode;
};
