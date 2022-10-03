import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { formatToBRL } from '../../constants';

function CustomerCheckout() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);

  const removeItem = (item) => {
    const cartUpdated = cart.filter((element) => element.id !== item.id);
    let total = 0;
    cartUpdated.forEach(({ quantity, price }) => {
      total += quantity * price;
    });
    localStorage.setItem('cart', JSON.stringify(cartUpdated));
    setCart(cartUpdated);
    setTotalPrice(total);
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')));
    const priceTot = cart.reduce((sum, elm) => {
      const value = elm.quantity * elm.price;
      return sum + value;
    }, 0);
    setTotalPrice(priceTot);
  }, [cart]);

  return (
    <div>
      <div>
        <Navbar />
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
        </table>
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          {formatToBRL.format(totalPrice)}

        </span>
      </div>
      <div>
        <h2>Detalhes e Endereço para Entrega</h2>
        <select data-testid="customer_checkout__select-seller">
          <option>Fulana</option>
        </select>
        <input
          data-testid="customer_checkout__input-address"
          type="text"
        />
        <input
          data-testid="customer_checkout__input-addressNumber"
          type="text"
        />
        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}

export default CustomerCheckout;
