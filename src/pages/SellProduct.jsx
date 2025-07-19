import React, { useState, useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";
import "./AddSell.css";

const SellProduct = () => {
  const { products, sellProduct } = useContext(InventoryContext);
  const [sale, setSale] = useState({
    productId: "",
    customer: "",
    quantity: "",
    sellDate: "",
  });

  const handleChange = (e) => {
    setSale({ ...sale, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sellProduct(sale);
    alert("Product sold!");
    setSale({ productId: "", customer: "", quantity: "", sellDate: "" });
  };

  return (
    <div className="form-container">
      <h2>Sell Product</h2>
      <form onSubmit={handleSubmit} className="styled-form">
        <select name="productId" value={sale.productId} onChange={handleChange} required>
          <option value="">Select Product</option>
          {products.map(p => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
        <input name="customer" placeholder="Customer Name" value={sale.customer} onChange={handleChange} required />
        <input name="quantity" type="number" placeholder="Quantity" value={sale.quantity} onChange={handleChange} required />
        <input name="sellDate" type="date" value={sale.sellDate} onChange={handleChange} required />
        <button type="submit" className="primary-btn">Sell Product</button>
      </form>
    </div>
  );
};

export default SellProduct;