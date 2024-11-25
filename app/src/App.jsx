import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Category from "./components/Category";
import Cart from "./components/Cart";
import groceryList from "./groceryList.json";

function App() {
  const [cart, setCart] = useState({});

  const findItem = (itemName) => {
    for (const category in groceryList) {
      const item = groceryList[category].find((item) => item.name === itemName);
      if (item) return item;
    }
    return null;
  };

  const incrementQuantity = (itemName) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemName]: (prevCart[itemName] || 0) + 1,
    }));
  };

  const decrementQuantity = (itemName) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemName] > 1) {
        newCart[itemName] -= 1;
      } else {
        delete newCart[itemName];
      }
      return newCart;
    });
  };

  const handleRemoveFromCart = (itemName) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[itemName];
      return newCart;
    });
  };

  const calculateTotal = () =>
    Object.keys(cart).reduce((total, itemName) => {
      const item = findItem(itemName);
      return total + (item ? item.price * cart[itemName] : 0);
    }, 0);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
  path="/category"
  element={
    <Category 
      cart={cart} 
      incrementQuantity={incrementQuantity}
    />
  }
/>

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              findItem={findItem}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              handleRemoveFromCart={handleRemoveFromCart}
              calculateTotal={calculateTotal}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
