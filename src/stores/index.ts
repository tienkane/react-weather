/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IS_DEV } from '../utils/constants';

interface appState {
  location: string;
  weatherLoading: boolean;
  forecastLoading: boolean;
  weatherData: any;
  forecastData: any;
  setLocation: (value: string) => void;
  setWeatherLoading: (value: boolean) => void;
  setForecastLoading: (value: boolean) => void;
  setWeatherData: (value: string) => void;
}

const appStore = (set: any) => ({
  location: 'Singapore, SG',
  weatherLoading: false,
  forecastLoading: false,
  weatherData: null,
  forecastData: null,
  setLocation: (value: string) => {
    set(() => ({
      location: value,
    }));
  },
  setWeatherLoading: (value: boolean) => {
    set(() => ({
      weatherLoading: value,
    }));
  },
  setForecastLoading: (value: boolean) => {
    set(() => ({
      forecastLoading: value,
    }));
  },
  setWeatherData: (value: any) => {
    set(() => ({
      weatherData: value,
    }));
  },
});

const useAppStore = IS_DEV
  ? create<appState, [['zustand/devtools', never]]>(devtools(appStore))
  : create<appState>(appStore);

export default useAppStore;
