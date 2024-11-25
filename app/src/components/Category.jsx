import groceryList from "../groceryList.json";
import "./Category.css";

function Category(incrementQuantity ) {
  const handleAddToCart = (item) => {
    incrementQuantity(item.name);
  };

  return (
    <div>
      <h2 className="card_heading">Grocery List</h2>
      {Object.keys(groceryList).map((category) => (
        <div key={category}>
          <h3 className="category-name">{category}</h3>
          <div className="card">
            {groceryList[category].map((item) => (
              <div key={item.name} className="card-item">
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <button onClick={() => handleAddToCart(item)} className="add-to-cart-button">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
