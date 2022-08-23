import { useNavigate } from 'react';

const handleNavigateByUserRole = (role) => {
  switch (role) {
    case 'customer':
      useNavigate('/customer/products')
      break;
    case 'seller':
      useNavigate('/seller/orders')
      break;
    case 'administrator':
      useNavigate('/admin/manage')
      break;
    default:
      break;
  }
}

export default handleNavigateByUserRole;
