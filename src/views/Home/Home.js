import React, { Component } from "react";
import "./Home.scss";
import ResCard from "../../components/ResCard";
import SideBar from "../../components/SideBar";
import Data from "../../data/restaurants.json";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resList: Data,
      image: [
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=500&q=60",
      ],
      itemsToShow: new Array(4).fill(5),
      otherCategory: "",
    };
  }
  showMore = (length, index) => {
    let tempArr = this.state.itemsToShow;
    tempArr[index] = length;
    this.setState({
      itemsToShow: tempArr,
    });
  };
  setCategory = (category,cat) => {
    this.setState({
      otherCategory: category,
      itemsToShow: new Array(4).fill(5),
    });
    if (cat && cat !== "see all" && cat !== "only on swiggy") {
      !this.state.otherCategory && document.getElementById(cat).scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  render() {
    return (
      <div className="Home-View">
        <SideBar setCategory={this.setCategory} />
        <div className="swiggy-brands">
          {this.state.otherCategory === "see all" ? (
            <div className="res-list">
              {this.state.resList.map((item, index) => {
                return (
                  <>
                    {item.restaurantList.map((res, idx) => {
                      return (
                        <ResCard
                          res={res}
                          image={
                            this.state.image[Math.floor(Math.random() * 10)]
                          }
                        />
                      );
                    })}
                  </>
                );
              })}
            </div>
          ) : (
            this.state.resList.map((item, index) => {
              return (
                <div id={item.category} className="category-holder">
                  <h1>{item.category}</h1>
                  <div className="res-list">
                    {item.restaurantList
                      .filter((key) =>
                        this.state.otherCategory
                          ? key.isExlusive === true
                          : key.name
                      )
                      .slice(0, this.state.itemsToShow[index])
                      .map((res, idx) => {
                        return (
                          <ResCard
                            res={res}
                            image={
                              this.state.image[Math.floor(Math.random() * 10)]
                            }
                          />
                        );
                      })}
                    {item.restaurantList.filter((key) =>
                      this.state.otherCategory
                        ? key.isExlusive === true
                        : key.name
                    ).length > 5 &&
                      this.state.itemsToShow[index] === 5 && (
                        <div
                          className="more-container"
                          onClick={() =>
                            this.showMore(this.state.itemsToShow[index] + 5, index)
                          }
                        >
                          {"+" +
                            (item.restaurantList.filter((key) =>
                              this.state.otherCategory
                                ? key.isExlusive === true
                                : key.name
                            ).length -
                              5) +
                            " MORE"}
                        </div>
                      )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}
export default Home;
