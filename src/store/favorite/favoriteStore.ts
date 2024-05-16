import { loadFromLocalStorage } from "@/hooks/localStorage";
import { create } from "zustand";

const AddToFavCartStore = (set) =>({
   FavoriteCart: loadFromLocalStorage("FavouriteCart") ?? [],
    addToFavoriteCart: (product) => {
                set((state) => {
                    console.log(product)
                    const newCart = [...state.FavoriteCart, product];
                    localStorage.setItem("FavouriteCart", JSON.stringify(newCart));
                    return { FavoriteCart: newCart };
                });
            },
            removeFromFavCart: (productId) => {
                set((state) => {
                    const newCart = state.FavoriteCart.filter(item => item.id !== productId);
                    localStorage.setItem("FavouriteCart", JSON.stringify(newCart));
                    return { FavoriteCart: newCart };
                });
            }
});


 const useAddToFavCartStore = create(AddToFavCartStore)
    export default useAddToFavCartStore;
