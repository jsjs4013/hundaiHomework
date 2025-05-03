import { http, HttpResponse } from "msw";
import { Category } from "../types/api";

// 모킹 데이터
const usageCategories: Category.Response = [
  { categoryID: Category.CategoryType.PRODUCT, name: "서비스 상품" },
  { categoryID: Category.CategoryType.COUNSELING, name: "도입 상담" },
  { categoryID: Category.CategoryType.CONTRACT, name: "계약" },
];

const consultCategories: Category.Response = [
  { categoryID: Category.CategoryType.SIGNUP, name: "가입문의" },
  { categoryID: Category.CategoryType.BUSINESS, name: "비즈니스(업무용" },
  { categoryID: Category.CategoryType.ACCIDENT, name: "사고/보험" },
  { categoryID: Category.CategoryType.RESERVATION, name: "예약/결제" },
  { categoryID: Category.CategoryType.VEHICLE, name: "차량문의" },
  { categoryID: Category.CategoryType.REFUEL, name: "충전" },
  { categoryID: Category.CategoryType.COUPON, name: "쿠폰/기타" },
];

// 여기에 API 핸들러를 정의합니다.
export const handlers = [
  // 신규 /api/category 핸들러
  http.get("/api/category", ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab") as Category.CategoryType | null;

    console.log("[MSW] /api/category requested with tab:", tab);

    if (tab === Category.CategoryType.USAGE)
      return HttpResponse.json(usageCategories);
    else if (tab === Category.CategoryType.CONSULT)
      return HttpResponse.json(consultCategories);
    else return HttpResponse.json([], { status: 400 }); // Error
  }),
];
