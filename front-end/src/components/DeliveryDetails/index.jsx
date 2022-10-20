import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, createSell } from '../../services/api';
import './index.scss';

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
    const cart = JSON.parse(localStorage.getItem('cart'));

    const data = {
      userId: await getUserId(),
      sellerId,
      totalPrice: localStorage.getItem('cartTotalPrice'),
      deliveryAddress: address,
      deliveryNumber: addressNumber,
      token: user.token,
    };

    const response = await createSell(data, cart);
    navigate(`/customer/orders/${response.data.id}`);
  };

  useEffect(() => {
    getSellers();
  }, []);

  return (
    <div className="delivery-details-container">
      <h2 className="delivery-details-title">Detalhes e Endereço para Entrega</h2>
      <select className="select-seller">
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
        type="text"
        value={ address }
        onChange={ (e) => setAddress(e.target.value) }
        placeholder="Rua Fogo Delivery"
      />
      <input
        type="text"
        value={ addressNumber }
        onChange={ (e) => setAddressNumber(e.target.value) }
        placeholder="123"
      />
      <button
        className="primary-button"
        type="button"
        onClick={ submitOrder }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}

export default DeliveryDetails;
