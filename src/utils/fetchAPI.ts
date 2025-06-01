import qs from "query-string";

interface FetchCommonProps {
  url: string;
  params?: Record<string, unknown>;
  options?: RequestInit;
}

const getUrl = (
  url: FetchCommonProps["url"],
  params: FetchCommonProps["params"] = {}
) => {
  const stringifiedParams = qs.stringify(params, {
    skipNull: true,
    skipEmptyString: true,
  });

  return `${url}${stringifiedParams ? `?${stringifiedParams}` : ""}`;
};

export const fetchAPI = {
  get: async <T>({ url, params, options }: FetchCommonProps): Promise<T> => {
    return fetch(getUrl(url, params), { method: "GET", ...options }).then(
      (res) => res.json()
    );
  },
  post: async <T, D>({
    url,
    params,
    data,
    options,
  }: FetchCommonProps & { data: D }): Promise<T> => {
    return fetch(getUrl(url, params), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      ...options,
    }).then((res) => res.json());
  },
};
