import Constants from 'expo-constants';

const {
  username,
  password,
  backendApi,
} = Constants.manifest.extra;

export const USERNAME = username;
export const PASSWORD = password;
export const LOGIN_URL = `${backendApi}/api/tokens/create`;
export const CHARACTER_URL = `${backendApi}/api/character`;
