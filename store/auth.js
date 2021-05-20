import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { USERNAME, PASSWORD, LOGIN_URL } from './config';

export const GET_TOKEN = async () => {
  try {
    return await AsyncStorage.getItem('token');
  } catch (error) {
    return null;
  }
};

const SET_TOKEN = async (token) => {
  try {
    return await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log(error);
  }
};

export const LOGIN = async () => {
  const data = new URLSearchParams();
  data.append('email', USERNAME);
  data.append('password', PASSWORD);

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  await axios.post(LOGIN_URL, data, config)
    .then((response) => {
      SET_TOKEN(response.data.token)
        .then(() => true)
        .catch(() => false);
    })
    .catch(() => false);
};
