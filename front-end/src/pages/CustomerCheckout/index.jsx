import React, { useEffect } from 'react';
import CheckoutTable from '../../components/CheckoutTable';
import Navbar from '../../components/Navbar';
import { formatToBRL } from '../../constants';

function CustomerCheckout() {
  const totalPrice = localStorage.getItem('totalPriceCart');

  useEffect(() => {
  }, [totalPrice]);

  return (
    <div>
      <div>
        <Navbar />
        <CheckoutTable />
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
