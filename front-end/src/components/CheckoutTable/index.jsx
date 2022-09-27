import React, { useState, useEffect } from 'react';
import { formatToBRL } from '../../constants';
import { setLocalStorage } from '../../utils/localStorage';

function CheckoutTable() {
  const [cart, setCart] = useState([]);
  const removeItem = (item) => {
    const cartUpdated = cart.filter((element) => element.id !== item.id);
    let total = 0;
    cartUpdated.forEach(({ quantity, price }) => {
      total += quantity * price;
    });
    localStorage.setItem('cart', JSON.stringify(cartUpdated));
    setCart(cartUpdated);
    setLocalStorage('cartTotalPrice', total);
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')));
  }, []);

  return (
    <table>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
        <th>Remover Item</th>
      </tr>
      {cart.map((item, index) => (
        <tr key={ index }>
          <td
            data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
          >
            {index + 1}

          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-name-${index}` }
          >
            {item.name}

          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
          >
            {item.quantity}

          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
          >
            {formatToBRL.format(item.price)}

          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
          >
            {formatToBRL.format(item.price * item.quantity)}

          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          >
            <button type="button" onClick={ () => removeItem(item) }>Remover item</button>

          </td>
        </tr>
      ))}
    </table>
  );
}

export default CheckoutTable;
