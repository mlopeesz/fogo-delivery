import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, createSell } from '../../services/api';

function DeliveryDetails() {
  const [sellers, setSellers] = useState();
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [sellerId, setSellerId] = useState(2);
  const navigate = useNavigate();

  const getSellers = async () => {
    const response = await api.get('/sellers');
    setSellers(response.data);
  };

  const getUserId = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const response = await api.post('/userid', user);
    return response.data;
  };

  const submitOrder = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const data = {
      userId: await getUserId(),
      sellerId,
      totalPrice: localStorage.getItem('cartTotalPrice'),
      deliveryAddress: address,
      deliveryNumber: addressNumber,
      token: user.token,
    };
    console.log(data);
    const response = await createSell(data, JSON.parse(localStorage.getItem('cart')));
    navigate(`/customer/orders/${response.data}`);
  };

  useEffect(() => {
    getSellers();
  }, []);

  return (
    <div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <select data-testid="customer_checkout__select-seller">
        {sellers?.map((seller, index) => (
          <option
            key={ index }
            value={ seller.id }
            onChange={ (e) => setSellerId(e.target.value) }
          >
            {seller.name}

          </option>
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
