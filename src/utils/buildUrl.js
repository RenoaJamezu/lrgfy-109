export const buildUrl = (path) => {
  return import.meta.env.DEV
  ? `http://localhost:3000/api${path}`
  : `/api${path}`;
};