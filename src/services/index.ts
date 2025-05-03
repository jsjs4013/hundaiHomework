import { Category } from "../types/api";

const BASE_URL = "/api";

async function get<T>(
  endpoint: string,
  params?: Record<string, string>
): Promise<T> {
  const url = new URL(`${BASE_URL}${endpoint}`, window.location.origin);
  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const api = {
  getCategory: (tab: Category.CategoryType) =>
    get<Category.Response>("/category", { tab }),
};

/**
 * async function post<T, R>(endpoint: string, body: T): Promise<R> {
 *   const response = await fetch(`${BASE_URL}${endpoint}`, {
 *     method: 'POST',
 *     headers: {
 *       'Content-Type': 'application/json',
 *     },
 *     body: JSON.stringify(body),
 *   });
 *   if (!response.ok) {
 *     throw new Error(`HTTP error! status: ${response.status}`);
 *   }
 *   return response.json() as Promise<R>;
 * }
 */
