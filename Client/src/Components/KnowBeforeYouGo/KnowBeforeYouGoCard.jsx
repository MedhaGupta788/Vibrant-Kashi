import React from "react";
import "./KnowBeforeYouGoCard.css"; // Import your CSS file
import { Link } from "react-router-dom";

const KnowBeforeYouGoCard = () => {
  return (
    <>
      <div className="knowBeforeHeading">Know Before You Go</div>
      <div className="know-before-you-go-section">
        <div className="know-before-you-go-card">
         
         <Link to="/aboutKashi">
          <img
            src="https://kashi.gov.in/cmsadmin/getApiFile/CMS/657e54ae8c37f1702778030~jpg"
            alt=""
            className="knowBeforeImage"
          />
            <h3>About Kashi</h3>
            </Link>
        </div>

        <div className="know-before-you-go-card">
          <Link to="/travelGuide">
          <img
            src="https://st5.depositphotos.com/12985790/64488/i/450/depositphotos_644881184-stock-photo-tour-guide-sunglasses-pointing-hand.jpg"
            alt=""
            className="knowBeforeImage"
          />
            <h3>Travel guide</h3>
            </Link>
        </div>

        <div className="know-before-you-go-card">
          <Link to="/gettingAround">
          <img
            src="https://vidhantravels.com/img/cars/airport-taxi-service.jpg"
            alt=""
            className="knowBeforeImage"
          />

            <h3>Getting Around</h3>
            </Link>
        </div>

        {/* <div className="know-before-you-go-card">
          <Link to="/additionalTips">
          <img
            src="https://thumbs.dreamstime.com/b/neon-sign-additional-tips-brick-wall-background-unique-style-design-can-be-used-banners-posters-magazine-covers-254563973.jpg"
            alt=""
            className="knowBeforeImage"
          />
            <h3>Additional Tips</h3>
            </Link>
        </div> */}
      </div>
    </>
  );
};

export default KnowBeforeYouGoCard;
