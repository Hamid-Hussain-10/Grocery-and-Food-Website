import { useState } from "react";
import "./Sidebar.css";
import Menu from "./Menu";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button onClick={toggleSidebar} className="sidebar-toggle">
        {isOpen ? "Close" : "Menu"}
      </button>
      <nav className="sidebar-menu">
      <Menu/>
      </nav>
    </div>
  );
};

export default Sidebar;
