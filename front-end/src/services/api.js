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

export const createSell = async (data, products) => {
  try {
    const response = await api.post(
      '/sale',
      {
        totalPrice: data.totalPrice,
        userId: data.userId,
        sellerId: data.sellerId,
        deliveryAddress: data.deliveryAddress,
        deliveryNumber: data.deliveryNumber,
        status: 'Pendente',
        saleDate: Date.now(),
      },
      {
        headers: { Authorization: data.token },
      },
    );
    products.forEach(async (product) => {
      await api.post('/salesproduct', {
        saleId: response.data,
        productId: product.id,
        quantity: product.quantity,
      });
    });
    return response;
  } catch (error) {
    return error;
  }
};
