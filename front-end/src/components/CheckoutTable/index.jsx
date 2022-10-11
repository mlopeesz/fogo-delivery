import React, { useEffect, useState } from 'react';
import { formatToBRL } from '../../constants';

function CheckoutTable() {
  const [totalPrice, setTotalPrice] = useState('');
  const [cart, setCart] = useState();

  const removeItem = (item) => {
    const cartUpdated = cart.filter((element) => element.id !== item.id);
    let total = 0;
    cartUpdated.forEach(({ quantity, price }) => {
      total += quantity * price;
    });
    localStorage.setItem('cart', JSON.stringify(cartUpdated));
    setCart(cartUpdated);
    setTotalPrice(total);
    localStorage.setItem('cartTotalPrice', total);
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')));
    setTotalPrice(localStorage.getItem('cartTotalPrice'));
  }, []);

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
            <th>Remover Item</th>
          </tr>
          {cart?.map((item, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
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
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {formatToBRL.format(item.price)}

              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {formatToBRL.format(item.price * item.quantity)}

              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
              >
                <button
                  type="button"
                  onClick={ () => removeItem(item) }
                >
                  Remover item

                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span
        data-testid="customer_checkout__element-order-total-price"
      >
        {formatToBRL.format(totalPrice)}

      </span>
    </div>
  );
}

export default CheckoutTable;
