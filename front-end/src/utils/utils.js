const handleNavigateByUserRole = (role) => {
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

export default handleNavigateByUserRole;
