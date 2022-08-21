const camelToSnakeCase = (s: string) => s.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export const setSearchParams = (url: URL, params: Record<string, string>) => {
  Object.entries(params).map(([camelKey, value]) => {
    const key = camelToSnakeCase(camelKey);
    url.searchParams.set(key, value);
  });
};
