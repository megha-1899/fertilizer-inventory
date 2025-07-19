import React, { useState, useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";
import "./AddSell.css";

const AddProduct = () => {
  const { addProduct } = useContext(InventoryContext);
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    purchaseDate: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    alert("Product added!");
    setProduct({ name: "", quantity: "", purchaseDate: "" });
  };

  return (
    <div className="form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="styled-form">
        <input name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
        <input name="quantity" type="number" placeholder="Quantity" value={product.quantity} onChange={handleChange} required />
        <input name="purchaseDate" type="date" value={product.purchaseDate} onChange={handleChange} required />
        <button type="submit" className="primary-btn">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;