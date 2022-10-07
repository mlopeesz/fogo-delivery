import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../utils/utils';
import { formatToBRL } from '../../constants';

function SellerOrderCard(props) {
  const
    {
      orderId,
      orderStatus,
      orderDate,
      orderPrice,
      orderAddress,
      orderAddressNumber,
    } = props;

  return (
    <div>
      <p>{orderId}</p>
      <p>
        {orderStatus}

      </p>
      <p>
        {formatDate(orderDate)}

      </p>
      <p>
        {formatToBRL.format(orderPrice)}

      </p>
      <p>
        {orderAddress}
      </p>
      <p>
        {orderAddressNumber}
      </p>
    </div>
  );
}

SellerOrderCard.propTypes = {
  orderId: PropTypes.number.isRequired,
  orderStatus: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  orderPrice: PropTypes.string.isRequired,
  orderAddress: PropTypes.string.isRequired,
  orderAddressNumber: PropTypes.string.isRequired,
};

export default SellerOrderCard;
