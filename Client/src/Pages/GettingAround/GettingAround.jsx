import React from 'react'
import "./GettingAround.css"
function GettingAround({headerFifteen}) {
  return (
    <div>
      <div className="GettingAround">
        <div className="GettingAroundImage">
          <img src={headerFifteen.image} alt="Events and Fstivals Image" />
        </div>
        <div className="GettingAroundTitle">
          <h1 className="GettingAroundHeading">{headerFifteen.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default GettingAround