import { FaAppleAlt, FaCheese, FaDrumstickBite, FaFish, FaBreadSlice, FaSnowflake, FaBoxOpen, FaEgg, FaCookieBite, FaWineBottle, FaPepperHot, FaBaby, FaHeartbeat, FaSoap } from 'react-icons/fa';

const Menu = () => {
  const categories = [
    { name: "Fruits and Vegetables", icon: <FaAppleAlt /> },
    { name: "Dairy and Eggs", icon: <FaCheese /> },
    { name: "Meat and Poultry", icon: <FaDrumstickBite /> },
    { name: "Seafood", icon: <FaFish /> },
    { name: "Bakery and Bread", icon: <FaBreadSlice /> },
    { name: "Frozen Foods", icon: <FaSnowflake /> },
    { name: "Pasta and Rice", icon: <FaBoxOpen /> },
    { name: "Breakfast Foods", icon: <FaEgg /> },
    { name: "Snacks and Chips", icon: <FaCookieBite /> },
    { name: "Beverages", icon: <FaWineBottle /> },
    { name: "Spices and Seasonings", icon: <FaPepperHot /> },
    { name: "Baby Food and Formula", icon: <FaBaby /> },
    { name: "Health and Wellness", icon: <FaHeartbeat /> },
    { name: "Household Supplies", icon: <FaSoap /> },
  ];

  return (
    <div>
      {categories.map((category, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', padding: '8.5px' }}>
          <span style={{ marginRight: '20px' }}>{category.icon}</span>
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Menu;
