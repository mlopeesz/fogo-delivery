import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../utils/utils';
import { api } from '../../services/api';

function CustomerOrderInfo({ orderDetails }) {
  const [sellerName, setSellerName] = useState();

  const getSellerName = async () => {
    const response = await api.get('/sellers');
    const findSeller = response.data.find((seller) => {
      if (seller.id === orderDetails.sellerId) return seller.name;
      return seller.name;
    });
    setSellerName(findSeller);
  };

  useEffect(() => {
    getSellerName();
  }, []);

  return (
    <div>
      <p>{orderDetails.id}</p>
      <p>{sellerName?.name}</p>
      <p>{formatDate(orderDetails.saleDate)}</p>
      <p>{orderDetails.status}</p>
      <button type="button">MARCAR COMO ENTREGUE</button>
    </div>
  );
}

CustomerOrderInfo.propTypes = {
  orderDetails: PropTypes.instanceOf(Object).isRequired,
};

export default CustomerOrderInfo;
