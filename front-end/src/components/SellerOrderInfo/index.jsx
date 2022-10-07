import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../utils/utils';

function SellerOrderInfo({ orderDetails }) {
  return (
    <div>
      <p>{orderDetails.id}</p>
      <p>{formatDate(orderDetails.saleDate)}</p>
      <p>{orderDetails.status}</p>
      <button type="button">PREPARAR PEDIDO</button>
      <button type="button">SAIU PARA ENTREGA</button>
    </div>
  );
}

SellerOrderInfo.propTypes = {
  orderDetails: PropTypes.instanceOf(Object).isRequired,
};

export default SellerOrderInfo;
