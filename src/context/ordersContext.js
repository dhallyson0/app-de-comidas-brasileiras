import { createContext, useContext, useState } from "react";

const OrdersContext = createContext({});

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  function criarPedido(cartItems, totalPreco, tipo) {
    const novoPedido = {
      id: Date.now(),
      numero: Math.floor(Math.random() * 900) + 1,
      itens: cartItems,
      total: totalPreco,
      tipoEntrega: tipo,
      status: "Concluído",
      data: new Date(),
    };

    setOrders((prev) => [novoPedido, ...prev]);
    return novoPedido;
  }

  return (
    <OrdersContext.Provider value={{ orders, criarPedido }}>
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrdersContext);
}