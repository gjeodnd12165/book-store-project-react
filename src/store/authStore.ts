import { create } from 'zustand';

interface StoreState {
  isSignedIn: boolean;
  storeSignin: (token: string) => void;
  storeSignout: () => void;
}

export const getToken = () => {
  const token = localStorage.getItem('token');
  return token;
}

const setToken = (token: string) => {
  localStorage.setItem('token', token);
}

export const removeToken = () => {
  localStorage.removeItem('token');
}

export const useAuthStore = create<StoreState>((set) => ({
  isSignedIn: getToken() ? true : false,
  storeSignin: (token: string) => {
    set({ isSignedIn: true });
    setToken(token);
  },
  storeSignout: () => {
    set({ isSignedIn: false });
    removeToken();
  }
}))