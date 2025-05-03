export const CategoryType = {
  USAGE: "USAGE",
  CONSULT: "CONSULT",
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

export type Response = {
  categoryID: CategoryType;
  name: string;
}[];
