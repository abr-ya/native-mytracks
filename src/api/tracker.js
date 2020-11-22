import axios from 'axios';
import { API_URL } from "@env";
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      console.log('interceptors token true');
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
