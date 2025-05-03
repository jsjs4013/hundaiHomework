import { Category } from ".";

export type Item = {
  answer: string;
  categoryName: string;
  id: number;
  question: string;
  subCategoryName: string;
};

export type PageInfo = {
  limit: number;
  nextOffset: number;
  offset: number;
  prevOffset: number;
  totalRecord: number;
};

export type Request = {
  limit: number;
  offset: number;
  tab: Category.TabType;
  faqCategoryID?: Category.CategoryType;
};

export type Response = {
  items: Item[];
  pageInfo: PageInfo;
};
