/* eslint-disable react/prop-types */
import "./Category.css";
import "./Category"

function Cart({ cart, findItem, incrementQuantity, decrementQuantity, handleRemoveFromCart, calculateTotal }) {
  return (
    <div>
       <h2 className="card_heading">Cart</h2>
      {Object.keys(cart).length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="added-cards">
          {Object.keys(cart).map((itemName) => {
            const item = findItem(itemName);
            return (
              <li key={itemName}>
                <div key={item.name} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100%", height: "45%" }}
                  />
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price}</p>
                  {itemName} - ${item.price} x {cart[itemName]}
                  <div className="cart-btn">
                  <button onClick={() => decrementQuantity(itemName)}> <span>-</span> </button>
                  <button onClick={() => incrementQuantity(itemName)}><span>+</span></button>
                  <button onClick={() => handleRemoveFromCart(itemName)}>
                    <h5>Remove</h5>
                  </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <h4>Total: ${calculateTotal().toFixed(2)}</h4>
    </div>
  );
}

export default Cart;
