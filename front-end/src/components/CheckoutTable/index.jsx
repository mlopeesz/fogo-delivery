import React, { useEffect, useState } from 'react';
import { formatToBRL } from '../../constants';
import './index.scss';

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
                {formatToBRL.format(item.price * item.quantity)}

              </td>
              <td>
                <button
                  className="tertiary-button"
                  type="button"
                  onClick={ () => removeItem(item) }
                >
                  Remover item

                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <td className="checkout-total-price">
          {`Total: ${formatToBRL.format(totalPrice)}`}
        </td>
      </table>
    </div>
  );
}

export default CheckoutTable;
