export const TabType = {
  USAGE: "USAGE",
  CONSULT: "CONSULT",
} as const;

export type TabType = (typeof TabType)[keyof typeof TabType];

export const CategoryType = {
  COUNSELING: "COUNSELING",
  PRODUCT: "PRODUCT",
  CONTRACT: "CONTRACT",
  SIGNUP: "SIGN_UP",
  BUSINESS: "BUSINESS",
  ACCIDENT: "ACCIDENT",
  RESERVATION: "RESERVATION",
  VEHICLE: "VEHICLE",
  REFUEL: "REFUEL",
  COUPON: "COUPON",
} as const;

export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType];

export type Request = {
  tab: TabType;
};

export type Response = {
  categoryID: CategoryType;
  name: string;
}[];
