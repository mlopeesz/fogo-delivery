import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const login = async (inputData) => {
  try {
    const response = await api.post('/login', {
      email: inputData.email,
      password: inputData.password,
    });
    return response.data;
  } catch (error) {
    return error;
  };
};

export default login;
