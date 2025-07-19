import React, { useContext, useState } from "react";
import { InventoryContext } from "../context/InventoryContext";


const Dashboard = () => {
    
  const { products, sales, deleteProduct } = useContext(InventoryContext);
  const [searchTerm, setSearchTerm] = useState("");
  const totalSales = sales.reduce((sum, item) => sum + item.quantity, 0);
  const latestSale = sales[sales.length - 1];
  const latestProduct = products[products.length - 1];
  const handleEdit = (product) => {
    alert(`Editing product: ${product.name}`);
  };
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <h2>Dashboard</h2>
    
      {/* Summary Cards */}
      <div className="card-grid">
        <div className="card">
          <h3>Total Products</h3>
          <p>{products.length}</p>
        </div>
        <div className="card">
          <h3>Total Sales</h3>
          <p>{totalSales}</p>
        </div>
        <div className="card">
          <h3>Recently Added</h3>
          {latestProduct ? (
            <div>
              <p><strong>{latestProduct.name}</strong></p>
              <p>Qty: {latestProduct.quantity}</p>
              <p>Added: {latestProduct.purchaseDate}</p>
            </div>
          ) : (
            <p>No products yet</p>
          )}
        </div>
        <div className="card">
          <h3>Recently Sold</h3>
          {latestSale ? (
            <div>
              <p><strong>{latestSale.name}</strong></p>
              <p>To: {latestSale.customer}</p>
              <p>Quantity: {latestSale.quantity}</p>
              <p>Sold on: {latestSale.sellDate}</p>
            </div>
          ) : (
            <p>No sale recorded yet.</p>
          )}
        </div>
      </div>

      {/* ✅ Add Product List Section BELOW This */}
      <h3 style={{ marginTop: "40px" }}>All Products</h3>
      <input type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "8px",
        marginBottom: "12px",
        width: "100%",
        maxWidth: "300px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        }} 
       />
      {filteredProducts.length === 0 ? (
        <p style={{ color: "black", marginTop: "10px" }}>No products found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Purchase Date</th>
              <th>Actions</th> {/* ✅ New column */}
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => {
              if (!product || !product.name) return null;
              return(
                <tr key={product.id }>
                  <td>{product.name || "Unnamed"}</td>
                  <td>{product.quantity || 0}</td>
                  <td>{product.purchaseDate || "N/A"}</td>
                  <td>
                    <button onClick={() => handleEdit(product)}>Edit</button>
                    <button onClick={() => deleteProduct(product.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
