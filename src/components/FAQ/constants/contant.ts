import { CategoryType } from "../../../types/api/category";

export const TabInfo = {
  [CategoryType.CONSULT]: "서비스 도입",
  [CategoryType.USAGE]: "서비스 이용",
} as const;
