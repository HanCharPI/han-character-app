import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const DEVICE_WIDTH = Dimensions.get('window').width;

export const STATUS_BAR_HEIGHT = Constants.statusBarHeight;
