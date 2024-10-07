import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: (typeof window !== 'undefined' && localStorage.getItem('cart'))
    ? JSON.parse(localStorage.getItem('cart'))
    : [],

  addToCart: (product) => {
    set((state) => {
      const updatedCart = [...state.cart, product];
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
      return { cart: updatedCart };
    });
  },

  removeFromCart: (uniqueId) => {
    set((state) => {
      const updatedCart = state.cart.filter(item => item.uniqueId !== uniqueId);
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
      return { cart: updatedCart };
    });
  },
}));