import { httpClient } from "./http";
import { ICategory } from "../model/category.model";

export const fetchCategory = async () => {
  const response = await httpClient.get<ICategory[]>('/categories');
  return response.data;
}