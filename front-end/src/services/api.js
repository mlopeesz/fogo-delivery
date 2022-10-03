import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const login = async (inputData) => {
  try {
    const response = await api.post('/login', {
      email: inputData.email,
      password: inputData.password,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const register = async (inputData) => {
  try {
    const response = await api.post('/register', {
      name: inputData.name,
      email: inputData.email,
      password: inputData.password,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const submitOrder = async (data) => {
  try {
    const response = await api.post(
      '/customer/checkout',
      {
        totalPrice: data.totalPrice,
        userId: data.userId,
        sellerId: data.sellerId,
        deliveryAddress: data.deliveryAddress,
        deliveryNumber: data.deliveryNumber,
      },
      {
        headers: {
          Authorization: data.token,
        },
      },
    );
    return response;
  } catch (error) {
    return error;
  }
};
