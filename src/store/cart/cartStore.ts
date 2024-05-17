import { create } from 'zustand';
import { loadFromLocalStorage } from '@/hooks/localStorage';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  images: string[];
}

interface CartItem extends Product {
  quantity: number;
}

interface AddToCartStore {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  getTotalPrice: () => number;
}

const AddToCartStore = (set: any) => ({
  cart: loadFromLocalStorage("Cart") ?? [],
  
  addToCart: (product: Product) => {
    set((state: AddToCartStore) => {
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

  updateQuantity: (productId: string, quantity: number) => {
    set((state: AddToCartStore) => {
      const newCart = state.cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      );
      localStorage.setItem("Cart", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },

  removeFromCart: (productId: string) => {
    set((state: AddToCartStore) => {
      const newCart = state.cart.filter(item => item.id !== productId);
      localStorage.setItem("Cart", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },

  getTotalPrice: () => {
    return set((state: AddToCartStore) => {
      const totalPrice = state.cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
      return { totalPrice };
    });
  }
});

const useAddToCartStore = create<AddToCartStore>(AddToCartStore);
export default useAddToCartStore;
