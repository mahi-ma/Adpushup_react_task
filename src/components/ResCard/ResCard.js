import React from "react";
import "./ResCard.scss";
import Star from "../../images/star.png";
import BlackStar from "../../images/black-star.png";

const ResCard = (props) => {
  return (
    <div className="restaurant-card">
      <img className="res-img" src={props.image} alt="res-img" />
      <div className="card-info">
        <h2>{props.res.name}</h2>
        <p className="food-types">{props.res.food_types.join(",")}</p>
      </div>
      <div className="card-prop">
        <div className={`rating ${!props.res.ratings && 'no-background'}`}>
          <img src={props.res.ratings ? Star : BlackStar} alt="star-img" />
          <p>{props.res.ratings ? props.res.ratings : "--"}</p>
        </div>
        <div>•</div>
        <p>{props.res.delivery_time ? props.res.delivery_time : "--"}</p>
        <div>•</div>
        <p>
          Rs.
          {(props.res.price_for_two ? props.res.price_for_two : "--") +
            " FOR TWO"}
        </p>
      </div>
      <div className="quick-view">
        <h2>QUICK VIEW</h2>
      </div>
    </div>
  );
};

export default ResCard;
