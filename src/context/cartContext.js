import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const clearCart = () => setCart({});

  // ➕ ADICIONAR ITEM
  const addToCart = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
  };

  // ➖ REMOVER ITEM (SEM DAR ERRO)
  const removeFromCart = (item) => {
    setCart((prev) => {
      const currentQty = prev[item.id] || 0;

      // se for 1 ou menos, remove do carrinho
      if (currentQty <= 1) {
        const updated = { ...prev };
        delete updated[item.id];
        return updated;
      }

      // senão só diminui
      return {
        ...prev,
        [item.id]: currentQty - 1,
      };
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};