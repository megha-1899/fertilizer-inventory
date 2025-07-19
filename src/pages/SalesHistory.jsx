import React, { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";
import "./AddSell.css";

const SalesHistory = () => {
  const { sales } = useContext(InventoryContext);

  return (
    <div className="form-container">
      <h2>Sales History</h2>
      {sales.length === 0 ? (
        <p>No sales recorded yet.</p>
      ) : (
        <table className="styled-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Customer</th>
              <th>Quantity</th>
              <th>Sell Date</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale, index) => (
              <tr key={index}>
                <td>{sale.name}</td>
                <td>{sale.customer}</td>
                <td>{sale.quantity}</td>
                <td>{sale.sellDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SalesHistory;
