import { create } from 'zustand';
import { loadFromLocalStorage } from '@/hooks/localStorage';

const AddToCartStore = (set) => ({
  cart: loadFromLocalStorage("Cart") ?? [],
  
  addToCart: (product) => {
    set((state) => {
      const existingProduct = state.cart.find(item => item.id === product.id);
      let newCart;
      if (existingProduct) {
        newCart = state.cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        newCart = [...state.cart, { ...product, quantity: 1 }];
      }
      localStorage.setItem("Cart", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },

  updateQuantity: (productId, quantity) => {
    set((state) => {
      const newCart = state.cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      );
      localStorage.setItem("Cart", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },

  removeFromCart: (productId) => {
    set((state) => {
      const newCart = state.cart.filter(item => item.id !== productId);
      localStorage.setItem("Cart", JSON.stringify(newCart));
      return { cart: newCart };
    });
  }
});

const useAddToCartStore = create(AddToCartStore);
export default useAddToCartStore;
