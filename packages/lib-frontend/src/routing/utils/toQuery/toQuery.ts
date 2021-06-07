export const toQuery = (params: { [key: string]: string }) =>
  Object.keys(params)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
    .join('&');
