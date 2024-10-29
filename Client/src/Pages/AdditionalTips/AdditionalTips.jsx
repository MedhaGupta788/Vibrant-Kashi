import React from 'react'
import "./AdditionalTips.css"
function AdditionalTips({headerSixteen}) {
  return (
    <div>
      <div className="AdditionalTips">
        <div className="AdditionalTipsImage">
          <img src={headerSixteen.image} alt="Events and Fstivals Image" />
        </div>
        <div className="AdditionalTipsTitle">
          <h1 className="AdditionalTipsHeading">{headerSixteen.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default AdditionalTips