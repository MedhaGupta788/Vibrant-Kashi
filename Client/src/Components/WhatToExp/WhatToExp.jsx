import React from "react";
import "./WhatToExp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const WhatToExp = ({ whatTo }) => {

  

  return (
    <div className="things-to-do">
      <h1 className="what-to-exp-heading">What To Experience</h1>
      <Link to="/thingToDo">
        <div className="seeAll">See All</div>
      </Link>
      <div className="carouselContainer12">
        <div className="cardsContainer12">
          {whatTo.map((item, index) => (
            <div key={index} className="card12">
              <img src={item.src} alt={item.title} className="cardImage12" />
              <div className="cardTitle12">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatToExp;
