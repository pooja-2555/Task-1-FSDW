import { useState } from "react";

function ECommerce() {
  const products = [
    { id: 1, name: "Wireless Mouse", price: 599 },
    { id: 2, name: "Keyboard", price: 999 },
    { id: 3, name: "Headphones", price: 1499 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={styles.container}>
      <h2>🛍️ Product Listing</h2>

      {/* Product List */}
      <div style={styles.productList}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <h4>{product.name}</h4>
            <p>₹ {product.price}</p>
            <button
              style={styles.button}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div style={styles.cart}>
        <h3>🛒 Cart ({cart.length})</h3>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <p key={index}>
              {item.name} - ₹ {item.price}
            </p>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
  },
  productList: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  productCard: {
    border: "1px solid #ccc",
    padding: "15px",
    width: "200px",
    borderRadius: "8px",
    textAlign: "center",
  },
  button: {
    padding: "8px",
    cursor: "pointer",
  },
  cart: {
    marginTop: "30px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
};

export default ECommerce;
