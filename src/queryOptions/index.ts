import { queryOptions } from "@tanstack/react-query";
import { api } from "../services";
import { Category, Faq } from "../types/api";

const PREFIX = "category";

const categoryOptions = ({ tab }: Category.Request) =>
  queryOptions<Category.Response>({
    queryKey: [PREFIX, "categoryOptions", tab],
    queryFn: () => api.getCategory({ tab }),
  });

const faqOptions = ({
  limit,
  offset,
  tab,
  faqCategoryID,
  question,
}: Faq.Request) =>
  queryOptions<Faq.Response>({
    queryKey: [PREFIX, "faqOptions", tab, limit, offset, faqCategoryID],
    queryFn: () => api.getFaq({ limit, offset, tab, faqCategoryID, question }),
  });

export const queryOptionsLayer = {
  category: categoryOptions,
  faq: faqOptions,
} as const;

export default queryOptionsLayer;
