import { useNavigate } from "react-router-dom";
import "./Home.css";
import { FaShippingFast } from "react-icons/fa";

function Home() {

  const navigate = useNavigate();

  const handleIconClick = () => navigate("/category");
  return (
    <>
      <div className="home">
        <div className="home-content">
          <h2>
            <span className="span1"> ORGANIC</span> Foods
            <span className="span2"> at your </span>
          </h2>
          <h3> DoorStep </h3>
          <p>Lorem ipsum dolor sit </p>
          <button className="btn" onClick={handleIconClick}>START SHOPPING</button>
          <button className="btn1">JOIN NOW</button>
          <div className="home-img">
            <img src="./images/2.png" alt="home-img" />
          </div>
          <div className="customers-detail">
            <div>
              <h3>14k+</h3>
              <span>PRODUCT VARIETIES</span>
            </div>
            <div>
              <h3>50k+</h3>
              <span>HAPPY CUSTOMERS</span>
            </div>
            <div>
              <h3>10k+</h3>
              <span>STORE LOCATIONS</span>
            </div>
          </div>
          <div className="delivery">
          <FaShippingFast className="delivery-icon" />
            <h4>FREE DELIVERY</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
