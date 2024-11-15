import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (email: string, password: string, firstName: string, lastName: string) => {
  const response = await api.post('/auth/register', { email, password, firstName, lastName });
  return response.data;
};

export const loginUser = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

// Setup on backend
export const logoutUser = async () => {
  const response = await api.post('/auth/logout');
  return response.data;
};
