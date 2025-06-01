import qs from "query-string";

interface FetchCommonProps {
  url: string;
  options?: RequestInit;
}

interface FetchGetProps extends FetchCommonProps {
  params: Record<string, unknown>;
}

interface FetchPostProps<D> extends FetchCommonProps {
  data: D;
}

const getUrl = (
  url: FetchCommonProps["url"],
  params: FetchGetProps["params"] = {}
) => {
  const stringifiedParams = qs.stringify(params, {
    skipNull: true,
    skipEmptyString: true,
  });

  return `${url}${stringifiedParams ? `?${stringifiedParams}` : ""}`;
};

export const fetchAPI = {
  get: async <T>({ url, params, options }: FetchGetProps): Promise<T> => {
    return fetch(getUrl(url, params), { method: "GET", ...options }).then(
      (res) => res.json()
    );
  },
  post: async <T, D>({ url, data, options }: FetchPostProps<D>): Promise<T> => {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      ...options,
    }).then((res) => res.json());
  },
};
