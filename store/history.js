import AsyncStorage from '@react-native-community/async-storage';

export const getHistory = async () => {
  try {
    return await AsyncStorage.getItem('history');
  } catch (error) {
    return error;
  }
};

export const setHistory = async (history) => {
  try {
    await AsyncStorage.setItem('history', history)
  } catch (error) {
    console.log(error)
  }
};

export const clearHistory = async () => {
  try {
    await AsyncStorage.removeItem('history')
  } catch (error) {
    console.log(error);
  }
};
