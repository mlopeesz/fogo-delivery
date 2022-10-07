import React from 'react';
import PropTypes from 'prop-types';
import { formatToBRL } from '../../constants';

function OrderDetailTable({ products, totalPrice }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
          {products.map((item, index) => (
            <tr key={ index }>
              <td>
                {index + 1}

              </td>
              <td>
                {item.name}

              </td>
              <td>
                {item.quantity}

              </td>
              <td>
                {formatToBRL.format(item.price)}

              </td>
              <td>
                {formatToBRL.format(item.price * item.salesProduct.quantity)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span>
        {formatToBRL.format(totalPrice)}
      </span>
    </div>
  );
}

OrderDetailTable.propTypes = {
  products: PropTypes.instanceOf(Object).isRequired,
  totalPrice: PropTypes.string,
};

OrderDetailTable.defaultProps = {
  totalPrice: '0',
};

export default OrderDetailTable;
