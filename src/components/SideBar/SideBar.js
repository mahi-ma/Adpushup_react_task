import React, { useState } from "react";
import "./SideBar.scss";
import Data from "../../data/restaurants.json";

const SideBar = (props) => {
  const [active, setActive] = useState("popular brands");
  const setCategory = (category) => {
    setActive(category);
    if(category==="only on swiggy" || category==="see all"){
      props.setCategory(category,category);
    }
    else{
      props.setCategory("",category);
    }
  };
  return (
    <div className="sidebar-card">
      {Data.map((item, index) => {
        return (
          <div
            onClick={() => setCategory(item.category)}
            className={`category-holder ${
              item.category === active && "active"
            }`}
          >
            <h2>{item.category}</h2>
            <p>{item.restaurantList.length + " OPTIONS"}</p>
          </div>
        );
      })}
      <div
        onClick={() => setCategory("only on swiggy")}
        className={`category-holder ${active==="only on swiggy" && "active"}`}
      >
        <h2>{"Only On Swiggy"}</h2>
        <p>{"20 OPTIONS"}</p>
      </div>
      <div
        onClick={() => setCategory("see all")}
        className={`category-holder ${active==="see all" && "active"}`}
      >
        <h2>{"See All"}</h2>
        <p>{"56 OPTIONS"}</p>
      </div>
    </div>
  );
};

export default SideBar;
