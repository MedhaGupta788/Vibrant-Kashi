import React from 'react'
import "./TravelGuide.css"
import { seasons } from "../../Data/seasonData.json"
import { payment } from "../../Data/paymentData.json"
import { AiOutlineSafety } from "react-icons/ai";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { usefulNumbers } from "../../Data/usefulNumbersData.json"
import { culturalEtiquette } from "../../Data/culturalEtiquetteData.json";
function TravelGuide({headerFourteen}) {
  return (
    <div>
      <div className="TravelGuide">
        <div className="TravelGuideImage">
          <img src={headerFourteen.image} alt="Events and Fstivals Image" />
        </div>
        <div className="TravelGuideTitle">
          <h1 className="TravelGuideHeading">{headerFourteen.title}</h1>
        </div>
      </div>
      <div>
        <div className="HeadingOfTravelGuide">
          Useful Information for Your Visit
        </div>

        <img
          src="https://cdn.pixabay.com/photo/2023/03/10/09/49/street-7841935_640.jpg"
          alt=""
          className="image1ofTravelGuide"
        />
        <div className="descriptionOfTravelGuide">
          We’re so excited that you’re considering a journey to Kashi. Varanasi,
          also known as Banaras or Kashi, stands as one of the world's oldest
          continuously inhabited cities and holds a revered place as the
          spiritual capital of India. Nestled on the banks of the sacred Ganges
          River in the northern state of Uttar Pradesh, Varanasi is a city where
          history, spirituality, and culture intertwine to create a unique and
          mesmerizing tapestry. This ancient city, often referred to as the
          "City of Light," holds a unique place in the hearts of millions,
          drawing pilgrims, scholars, and tourists from all corners of the
          globe.It is an enchanting land of rich heritage, warm hospitality and
          breathtaking views. We understand that navigating the logistics of
          daily life in a new country can seem overwhelming, so we’ve gathered
          some essential information to make exploring Kashi as seamless and
          enjoyable as possible. From getting around to communicating to paying
          for purchases and everything in between, we’ve got you covered.
        </div>
        <div className="HeadingOfTravelGuide">A Guide to Kashi’s Seasons</div>
        <div className="subHeadingOfTravelGuide">When are you visiting?</div>
        <div>
          {
            <div className="varanasi-seasons">
              <div className="season-cards-container">
                {seasons.map((season, index) => (
                  <div key={index} className="season-card">
                    <h3>{season.title}</h3>
                    <p>
                      <strong>Temperature:</strong> {season.temperature}
                    </p>
                    <p>
                      <strong>Weather:</strong> {season.weather}
                    </p>
                    <p>
                      <strong>What to Expect:</strong> {season.expectations}
                    </p>
                    <p>
                      <strong>Tips:</strong>
                    </p>
                    <ul>
                      {season.tips.map((tip, idx) => (
                        <li key={idx}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          }

          <div></div>
          <div className="HeadingOfTravelGuide">How To Pay In Kashi?</div>

          <div className="paymentCardContainer">
            {payment.map((pay) => {
              return (
                <div className="paymentCard">
                  <div className="paymentCardHeading">{pay.heading}</div>
                  <div className="payment-card-image-container">
                    <img src={pay.images} alt="" className="paymentCardImage" />
                  </div>
                  <div className="payment-card-desc-container">
                    <div className="descriptionOfPaymentCard">{pay.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="HeadingOfTravelGuide">
            Kashi Healthcare & Safety Tips
          </div>

          <div className="HealthCardContainer">
            <div className="HealthCard">
              <div className="HeadingOfHealthCard">HEALTH PRECAUTIONS</div>
              <div>
                <MdOutlineHealthAndSafety className="iconsOfHealthCard" />
              </div>
              <div className="DetailsofHealthCard">
                <VscDebugBreakpointLog /> Drink only bottled or filtered water.
                <br />
                <VscDebugBreakpointLog /> Avoid street food from unhygienic
                vendors prefer well-reviewed eateries.
                <br />
                <VscDebugBreakpointLog /> Carry basic medications and a
                first-aid kit.
              </div>
            </div>

            <div className="HealthCard">
              <div className="HeadingOfHealthCard">SAFETY TIPS</div>
              <div>
                <AiOutlineSafety className="iconsOfHealthCard" />
              </div>
              <div className="DetailsofHealthCard">
                <VscDebugBreakpointLog /> Be cautious around the ghats,
                especially during crowded times.
                <br />
                <VscDebugBreakpointLog /> Avoid swimming in the Ganges River.
                <br />
                <VscDebugBreakpointLog /> Keep your belongings secure and be
                aware of your surroundings.
                <br />
                <VscDebugBreakpointLog /> Respect local customs and dress
                modestly, especially when visiting religious sites.
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="HeadingOfTravelGuide">Useful Numbers</div>
          <div className="useful-numbers-container">
            {usefulNumbers.map((category) => (
              <div className="useful-numbers-category" key={category.category}>
                <h3 className="CategoryOfUseFulNumbers">{category.category}</h3>
                <ul>
                  {category.numbers.map((number) => (
                    <li key={number.name}>
                      <div className="ContainerOfUsefulNumbers">
                        <strong className="HeadingofUseFulNumber">
                          {number.name}:
                        </strong>{" "}
                        <p className="NumberHeading">{number.number}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="CulturalEtiquette">
          <h2 className="HeadingOfTravelGuide">
            Cultural Etiquette in Varanasi
          </h2>
          <div className="cultural-etiquette-container">
            <div className="cultural-etiquette-cards">
              {culturalEtiquette.map((category) => (
                <div
                  className="cultural-etiquette-card"
                  key={category.category}
                >
                  <h3>{category.category}</h3>
                  <ul>
                    {category.items.map((item) => (
                      <li key={item.title}>
                        <strong className='titleOfEtiquette'>{item.title}:</strong> {item.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelGuide