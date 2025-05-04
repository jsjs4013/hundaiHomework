import { http, HttpResponse } from "msw";
import { Category, Faq } from "../types/api";

// 모킹 데이터
const consultCategories: Category.Response = [
  { categoryID: Category.CategoryType.PRODUCT, name: "서비스 상품" },
  { categoryID: Category.CategoryType.COUNSELING, name: "도입 상담" },
  { categoryID: Category.CategoryType.CONTRACT, name: "계약" },
];

const usageCategories: Category.Response = [
  { categoryID: Category.CategoryType.SIGNUP, name: "가입문의" },
  { categoryID: Category.CategoryType.BUSINESS, name: "비즈니스(업무용)" },
  { categoryID: Category.CategoryType.ACCIDENT, name: "사고/보험" },
  { categoryID: Category.CategoryType.RESERVATION, name: "예약/결제" },
  { categoryID: Category.CategoryType.VEHICLE, name: "차량문의" },
  { categoryID: Category.CategoryType.REFUEL, name: "충전" },
  { categoryID: Category.CategoryType.COUPON, name: "쿠폰/기타" },
];

const consultFaqs: Faq.Response = {
  items: [
    {
      answer:
        "<p>소속 회사가 기아 비즈 이용 계약이 되어있다면,<br>업무 시간에는 이용 건별 별도 결제 없이 편리하게 업무용 차량을 이용할 수 있고(대여 요금은 소속 회사에서 부담), <br>비업무 시간에는 출퇴근 및 주말 여가옹으로 차량을 이용 (대여 요금은 개인이 부담) 할 수 있습니다.</p><p> </p><p>자세한 상품 안내는 메뉴 &gt; 하단의 &#39;이용가이드&#39; &gt; 상품 안내 탭을 통해 확인하실 수 있습니다.<br> </p><p> </p>",
      categoryName: "도입문의",
      id: 38,
      question: "기아 비즈에서는 어떤 상품을 이용할 수 있나요?",
      subCategoryName: "서비스 상품",
    },
    {
      answer:
        "<p>기아 비즈의 &#39;비즈니스 상품&#39; 이용 시, 기존 차량 이용 대비 아래와 같은 장점이 있습니다.</p><p>- 차량 보유 및 유지관리비 부담 없이, 우리 회사의 차량 이용 패턴에 딱 맞는 상품으로 계약 후 업무용 차량 운영 가능</p><p>- App 하나로 편하게 예약하고, 스마트키로 제어하는 비대면 간편 대여</p><p>- 회사가 등록한 결제 수단으로 자동 결제 및 간편한 증빙 가능</p><p>* 재직 중인 회사의 기아 비즈 차량 이용과 관련한 자세한 내용은 사내 기아 비즈 담당자에게 문의하시기 바랍니다.</p>",
      categoryName: "도입문의",
      id: 107,
      question: "기아 비즈 비즈니스용 상품 이용 시 무엇이 좋은가요?",
      subCategoryName: "서비스 상품",
    },
    {
      answer:
        '<p><span style="font-size: &#39;13pt&#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;">기아 비즈 도입 상담을 신청하신 경우, 빠른 시일 내에 기재해주신 연락처로 연락드릴 예정입니다. </span></p><p><span style="font-size: &#39;13pt&#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;">담당자와의 1:1 상담 후 최대한 원하시는 시기에 맞춰 서비스가 도입될 수 있도록 도와드리고 있으나, 도입하시는 상품에 따라 소요되는 기간은 다소 상이할 수 있습니다. </span></p>',
      categoryName: "도입문의",
      id: 134,
      question: "비즈니스 상품 도입 기간은 얼마나 걸리나요?",
      subCategoryName: "도입 상담",
    },
    {
      answer:
        "<p>기아 비즈 &#39;비즈니스 상품&#39; 도입 절차는 아래와 같습니다.</p><p>① 상담 문의 등록 후 1:1 맞춤 상담 진행</p><p>② 서비스 도입 상품 및 세부 조건 협의 후 계약 진행</p><p>③ 관리자 Web 계정 생성 후 회사 정보 설정</p><p>④ 임직원 회원가입 진행</p><p>⑤ 전용 K존에서 차량 대여 및 이용</p>",
      categoryName: "도입문의",
      id: 135,
      question: "비즈니스 상품 도입 절차가 어떻게 되나요?",
      subCategoryName: "계약",
    },
  ],
  pageInfo: {
    limit: 10,
    nextOffset: 0,
    offset: 0,
    prevOffset: 0,
    totalRecord: 4,
  },
};

const faqSignup: Faq.Response = {
  items: [
    {
      answer:
        '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">아래의 조건 충족 시 기아 비즈 가입 및 이용이 가능합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">⑤ 가입/이용 필수 약관 동의</span></span></p>',
      categoryName: "가입문의",
      id: 23,
      question: "가입 및 이용 조건은 어떻게 되나요?",
      subCategoryName: "가입",
    },
  ],
  pageInfo: {
    limit: 10,
    nextOffset: 10,
    offset: 0,
    prevOffset: 0,
    totalRecord: 1,
  },
};

const faqBuiness: Faq.Response = {
  items: [
    {
      answer:
        '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">아래의 조건 충족 시 기아 비즈 가입 및 이용이 가능합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">⑤ 가입/이용 필수 약관 동의</span></span></p>',
      categoryName: "비즈니스(업무용)",
      id: 23,
      question: "가입 및 이용 조건은 어떻게 되나요?",
      subCategoryName: "상품",
    },
  ],
  pageInfo: {
    limit: 10,
    nextOffset: 10,
    offset: 0,
    prevOffset: 0,
    totalRecord: 1,
  },
};

const usageFaqs: Faq.Response = {
  items: [
    {
      answer:
        '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">아래의 조건 충족 시 기아 비즈 가입 및 이용이 가능합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">⑤ 가입/이용 필수 약관 동의</span></span></p>',
      categoryName: "가입문의",
      id: 23,
      question: "가입 및 이용 조건은 어떻게 되나요?",
      subCategoryName: "가입",
    },
    {
      answer:
        '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">아래의 조건 충족 시 기아 비즈 가입 및 이용이 가능합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">⑤ 가입/이용 필수 약관 동의</span></span></p>',
      categoryName: "비즈니스(업무용)",
      id: 23,
      question: "가입 및 이용 조건은 어떻게 되나요?",
      subCategoryName: "상품",
    },
    {
      answer:
        '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">아래의 조건 충족 시 기아 비즈 가입 및 이용이 가능합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">⑤ 가입/이용 필수 약관 동의</span></span></p>',
      categoryName: "사고/보험",
      id: 23,
      question: "가입 및 이용 조건은 어떻게 되나요?",
      subCategoryName: "사고",
    },
    {
      answer:
        '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">아래의 조건 충족 시 기아 비즈 가입 및 이용이 가능합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">⑤ 가입/이용 필수 약관 동의</span></span></p>',
      categoryName: "가입문의",
      id: 23,
      question: "가입 및 이용 조건은 어떻게 되나요?",
      subCategoryName: "가입",
    },
    {
      answer:
        '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">아래의 조건 충족 시 기아 비즈 가입 및 이용이 가능합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">⑤ 가입/이용 필수 약관 동의</span></span></p>',
      categoryName: "가입문의",
      id: 23,
      question: "가입 및 이용 조건은 어떻게 되나요?",
      subCategoryName: "가입",
    },
    {
      answer:
        '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">아래의 조건 충족 시 기아 비즈 가입 및 이용이 가능합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">⑤ 가입/이용 필수 약관 동의</span></span></p>',
      categoryName: "가입문의",
      id: 23,
      question: "가입 및 이용 조건은 어떻게 되나요?",
      subCategoryName: "가입",
    },
    {
      answer:
        '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">아래의 조건 충족 시 기아 비즈 가입 및 이용이 가능합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">⑤ 가입/이용 필수 약관 동의</span></span></p>',
      categoryName: "가입문의",
      id: 23,
      question: "가입 및 이용 조건은 어떻게 되나요?",
      subCategoryName: "가입",
    },
    {
      answer:
        '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">아래의 조건 충족 시 기아 비즈 가입 및 이용이 가능합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">⑤ 가입/이용 필수 약관 동의</span></span></p>',
      categoryName: "가입문의",
      id: 23,
      question: "가입 및 이용 조건은 어떻게 되나요?",
      subCategoryName: "가입",
    },
    {
      answer:
        '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">아래의 조건 충족 시 기아 비즈 가입 및 이용이 가능합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">⑤ 가입/이용 필수 약관 동의</span></span></p>',
      categoryName: "가입문의",
      id: 23,
      question: "가입 및 이용 조건은 어떻게 되나요?",
      subCategoryName: "가입",
    },
    {
      answer:
        '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">아래의 조건 충족 시 기아 비즈 가입 및 이용이 가능합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">⑤ 가입/이용 필수 약관 동의</span></span></p>',
      categoryName: "가입문의",
      id: 23,
      question: "가입 및 이용 조건은 어떻게 되나요?",
      subCategoryName: "가입",
    },
    {
      answer:
        '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">아래의 조건 충족 시 기아 비즈 가입 및 이용이 가능합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">⑤ 가입/이용 필수 약관 동의</span></span></p>',
      categoryName: "가입문의",
      id: 23,
      question: "가입 및 이용 조건은 어떻게 되나요?",
      subCategoryName: "가입",
    },
    {
      answer:
        '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">아래의 조건 충족 시 기아 비즈 가입 및 이용이 가능합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">⑤ 가입/이용 필수 약관 동의</span></span></p>',
      categoryName: "가입문의",
      id: 23,
      question: "가입 및 이용 조건은 어떻게 되나요?",
      subCategoryName: "가입",
    },
  ],
  pageInfo: {
    limit: 10,
    nextOffset: 10,
    offset: 0,
    prevOffset: 0,
    totalRecord: 12,
  },
};

// 여기에 API 핸들러를 정의합니다.
export const handlers = [
  // 신규 /api/category 핸들러
  http.get("/api/category", ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab") as Category.TabType | null;

    console.log("[MSW] /api/category requested with tab:", tab);

    if (tab === Category.TabType.USAGE)
      return HttpResponse.json(usageCategories);
    else if (tab === Category.TabType.CONSULT)
      return HttpResponse.json(consultCategories);
    else return HttpResponse.json([], { status: 400 }); // Error
  }),
  http.get("/api/faq", ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab") as Category.TabType | null;
    const limit = url.searchParams.get("limit") as string | null;
    const offset = url.searchParams.get("offset") as string | null;
    const faqCategoryID = url.searchParams.get("faqCategoryID") as
      | string
      | null;
    const question = (url.searchParams.get("question") as string | null)
      ? decodeURIComponent(url.searchParams.get("question") as string)
      : null;

    console.log(
      "[MSW] /api/faq requested with tab, limit, offset:",
      tab,
      limit,
      offset,
      question
    );

    if (tab === Category.TabType.USAGE) {
      if (Category.CategoryType.SIGNUP === faqCategoryID)
        return HttpResponse.json(faqSignup);
      else if (Category.CategoryType.BUSINESS === faqCategoryID)
        return HttpResponse.json(faqBuiness);
      else return HttpResponse.json(usageFaqs);
    } else if (tab === Category.TabType.CONSULT) {
      if (Category.CategoryType.PRODUCT === faqCategoryID)
        return HttpResponse.json(consultFaqs);
      else if (Category.CategoryType.COUNSELING === faqCategoryID)
        return HttpResponse.json(consultFaqs);
      else if (Category.CategoryType.CONTRACT === faqCategoryID)
        return HttpResponse.json(consultFaqs);
      else return HttpResponse.json(consultFaqs);
    } else return HttpResponse.json([], { status: 400 }); // Error
  }),
];
