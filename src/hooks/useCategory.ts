import { useEffect, useState } from "react";
import { ICategory } from "../model/category.model";
import { fetchCategory } from "../api/category.api";

export const useCategory = () => {
  const [category, setCategory] = useState<ICategory[]>([]);

  useEffect(() => {
    fetchCategory().then((categoryData) => {
      if (!category) return;

      const categoryWithAll = [
        {
          id: null,
          name: '전체',
        },
        ...categoryData
      ]

      setCategory(categoryWithAll);
    })}, []);
  
  return { category };
}