import { create } from "zustand";

type TToastType = 'info' | 'error';

export interface IToast {
  id: number;
  message: string;
  type: TToastType;
}

interface IToastStoreState {
  toasts: IToast[];
  addToast: (message: string, type?: TToastType) => void;
  removeToast: (id: number) => void;
}

const useToastStore = create<IToastStoreState>((set) => ({
  toasts: [],
  addToast: (message: string, type: TToastType = 'info') => {
    set((state) => ({
      toasts: [...state.toasts, { message, type, id: Date.now() }],
    }))
  },
  removeToast: (id: number) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }))
  }
}));

export default useToastStore;