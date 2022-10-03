import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';

function DeliveryDetails() {
  const [sellers, setSellers] = useState();
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');

  const getSellers = async () => {
    const response = await api.get('/sellers');
    setSellers(response.data);
  };

  const submitOrder = async () => {
    console.log('gru');
  };

  useEffect(() => {
    getSellers();
  }, []);

  return (
    <div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <select data-testid="customer_checkout__select-seller">
        {sellers?.map((seller, index) => (
          <option key={ index } value={ seller.id }>{seller.name}</option>
        ))}
      </select>
      <input
        data-testid="customer_checkout__input-address"
        type="text"
        value={ address }
        onChange={ (e) => setAddress(e.target.value) }
      />
      <input
        data-testid="customer_checkout__input-addressNumber"
        type="text"
        value={ addressNumber }
        onChange={ (e) => setAddressNumber(e.target.value) }
      />
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        onClick={ submitOrder }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}

export default DeliveryDetails;
