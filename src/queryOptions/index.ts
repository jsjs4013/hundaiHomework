import { queryOptions } from "@tanstack/react-query";
import { api } from "../services";
import { Category } from "../types/api";

const PREFIX = "category";

export const categoryOptions = (tab: Category.CategoryType) =>
  queryOptions<Category.Response>({
    queryKey: [PREFIX, tab],
    queryFn: () => api.getCategory(tab),
  });
