export const MIN_LENGTH_PASSWORD = 6;
export const MIN_LENGTH_NAME = 12;
export const validateEmailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
export const STATUS_OK = 200;
export const STATUS_CREATED = 201;
export const formatToBRL = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
