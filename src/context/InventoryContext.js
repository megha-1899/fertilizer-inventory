import React, { createContext, useState } from "react";

// Create context
export const InventoryContext = createContext();

// Provider
export const InventoryProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // All products
  const [sales, setSales] = useState([]);       // Sold products

  // ✅ Add a new fertilizer product
  const addProduct = (product) => {
    setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
  };

  // ✅ Sell a product (move from products to sales)
  const sellProduct = (id, sellQuantity, customerName, sellDate) => {
  setProducts((prev) => {
    return prev.flatMap((p) => {
      if (p.id === id) {
        const remainingQty = p.quantity - sellQuantity;
        const soldItem = {
          ...p,
          quantity: sellQuantity,
          customer: customerName,
          sellDate,
        };
        setSales((s) => [...s, soldItem]);
        
        // Return updated original with remaining quantity (if > 0)
        return remainingQty > 0
          ? [{ ...p, quantity: remainingQty }]
          : [];
      } else {
        return [p];
      }
    });
  });
};

const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
};
  return (
    <InventoryContext.Provider
      value={{
        products,
        setProducts,
        sales,
        setSales,
        addProduct,
        sellProduct,
        deleteProduct, // ✅ Don't forget to expose it
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
