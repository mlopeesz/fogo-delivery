export const handleNavigateByUserRole = (role) => {
  switch (role) {
  case 'customer':
    return '/customer/products';
  case 'seller':
    return '/seller/orders';
  case 'administrator':
    return '/admin/manage';
  default:
    break;
  }
};

export const formatDate = (date) => {
  const MAX_INDEX_DATE = 10;
  return date !== undefined ? date.slice(0, MAX_INDEX_DATE)
    .split('-').reverse().join('/') : null;
};
