export const restRequestMethod = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  patch: 'PATCH',
  delete: 'DELETE',
} as const;

export type RESTRequestMethod = typeof restRequestMethod[keyof typeof restRequestMethod];
