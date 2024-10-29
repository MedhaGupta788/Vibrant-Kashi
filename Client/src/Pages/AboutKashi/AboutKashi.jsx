import React from 'react'
import "./AboutKashi.css"
import { FaRegStar } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";

function AboutKashi({headerThirteen}) {
  return (
    <div>
      <div className="AboutKashi">
        <div className="AboutKashiImage">
          <img src={headerThirteen.image} alt="Events and Fstivals Image" />
        </div>
        <div className="AboutKashiTitle">
          <h1 className="AboutKashiHeading">{headerThirteen.title}</h1>
        </div>
      </div>

      <h1 className="aboutKashiHeading">Kashi- The Eternal City</h1>
      <div className="cardOfKashiIntro">
        <div className="containerOfImageOfKashi">
          <img
            src="https://assets.architecturaldigest.in/photos/600823ad56e01e341bc35522/master/pass/Brijrama-Palace-Varanasi-featured-1366x768.jpg"
            alt=""
            className="imageOfAboutKashi"
          />
        </div>
        <div className="detailsOfVaranasi">
          Varanasi, also known as Baranas or Kashi, stands as one of the world's
          oldest continuously inhabited cities and holds a revered place as the
          spiritual capital of India. Nestled on the banks of the sacred Ganges
          River in the northern state of Uttar Pradesh, Varanasi is a city where
          history, spirituality, and culture intertwine to create a unique and
          mesmerizing tapestry. This ancient city, often referred to as the
          "City of Light," holds a unique place in the hearts of millions,
          drawing pilgrims, scholars, and tourists from all corners of the
          globe.
        </div>

        <div>
          <h1 className="aboutKashiSubHeading">
            Historical and Religious Significance{" "}
          </h1>
          <div>
            <img
              src="https://bodhgaya.tourismindia.co.in/images/places-to-visit/header/metta-buddharam-temple-bodh-gaya-tourism-entry-fee-timings-holidays-reviews-header.jpg"
              className="Subimage1OfAboutKashi"
            />
          </div>
          <div className="detailsOfVaranasi">
            The history of Varanasi stretches back over 3,000 years, making it
            one of the cradles of civilization. According to legend, the city
            was founded by Lord Shiva, one of the principal deities of Hinduism.
            Its ancient name, Kashi, translates to "City of Light," signifying
            its long-standing reputation as a beacon of spiritual enlightenment.
            Throughout its history, Varanasi has been a significant center for
            religious, educational, and cultural activities. Varanasi is a
            crucial hub for Hinduism. Pilgrims flock to the city to bathe in the
            Ganges, believing that the sacred waters cleanse them of their sins.
            The ghats, or riverfront steps, are particularly significant. Among
            them, Dashashwamedh Ghat, where the grand Ganga Aarti ceremony is
            performed daily, and Manikarnika Ghat, the most auspicious place for
            Hindus to be cremated, hold special importance. Beyond Hinduism,
            Varanasi is also significant in Buddhism and Jainism. Nearby Sarnath
            is the site where Gautama Buddha delivered his first sermon after
            attaining enlightenment. This event marked the beginning of the
            Buddhist sangha, making Sarnath one of Buddhism's most revered
            sites. For Jains, Varanasi is the birthplace of Parshvanatha, the
            23rd Tirthankara, adding another layer of religious diversity and
            depth to the city's historical tapestry.
          </div>
        </div>

        <div>
          <h1 className="aboutKashiSubHeading">Cultural Richness</h1>
          <div>
            <img
              src="https://www.newagebd.com/files/records/news/202206/174664_188.jpg"
              alt=""
              className="imageOfAboutKashi"
            />
          </div>
          <div className="detailsOfVaranasi">
            Varanasi is not only a spiritual haven but also a cultural melting
            pot. The city has a profound connection to classical music, dance,
            and literature. Renowned musicians such as Ravi Shankar and
            Bismillah Khan hail from Varanasi, which has nurtured a rich
            tradition of classical music. The Banaras Gharana, a prominent
            school of Indian classical music, is rooted here, contributing
            significantly to the preservation and propagation of Hindustani
            classical music. Literature thrives in Varanasi, with a strong
            tradition in both Sanskrit and Hindi literature. The city has
            inspired countless poets, writers, and philosophers over the
            centuries, cementing its place as a center of intellectual and
            cultural discourse. Festivals in Varanasi are vibrant and deeply
            rooted in tradition. Celebrations such as Diwali, Holi, and Maha
            Shivaratri are marked with fervor. The Ganga Mahotsav and Dev
            Deepawali are particularly spectacular, with the ghats illuminated
            by thousands of diyas (oil lamps), creating a mesmerizing sight that
            symbolizes the triumph of light over darkness.
          </div>
        </div>

        <div>
          <h1 className="aboutKashiSubHeading">
            Economic and Modern Developments
          </h1>
          <div className="detailsOfVaranasi">
            Varanasi's economy is a blend of traditional industries and modern
            initiatives. The city is renowned for its Banarasi silk sarees, a
            timeless craft that supports thousands of weavers. These sarees are
            highly prized for their intricate designs and craftsmanship, making
            them a significant part of Varanasi's economic fabric. Tourism is
            another vital sector, with millions visiting the city each year to
            experience its spiritual aura, historical landmarks, and cultural
            richness. The influx of tourists has led to the development of
            infrastructure, with improvements in roads, sanitation, and
            transportation. In recent years, Varanasi has been included in the
            Smart Cities Mission, a government initiative aimed at enhancing
            urban planning and infrastructure. Projects under this mission focus
            on sustainable development, better waste management, and improved
            public services, ensuring that Varanasi retains its historical charm
            while adapting to contemporary needs.
          </div>
        </div>
      </div>

      <h1 className="aboutKashiHeading">Languages Spoken</h1>
      <div className="LanguageCardContainer">
        <div className="LanguageCardOfKashi">
          <div>
            <img
              src="https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/11/Learning-Hindi-at-Rosemounts-Institute-in-Dehradun.jpg?size=*:900"
              alt=""
              className="LanguageCardImage"
            />
          </div>
          <div className="LanguageCardHeading">Hindi</div>
          <div className="LanguageCardDetails">
            Hindi is the most widely spoken language in Varanasi and serves as
            the lingua franca for communication among locals and visitors. The
            local variant of Hindi in Varanasi may include distinct vocabulary
            and colloquialisms that reflect the city's unique cultural identity.
          </div>
        </div>

        <div className="LanguageCardOfKashi">
          <div>
            <img
              src="https://polyglotclub.com/wiki/images/a/a9/Bhojpuri-Language-PolyglotClub.png"
              alt=""
              className="LanguageCardImage"
            />
          </div>
          <div className="LanguageCardHeading">Bhojpuri</div>
          <div className="LanguageCardDetails">
            Bhojpuri, a language closely related to Hindi, is spoken by a
            significant number of residents in Varanasi, especially in rural
            areas and among older generations. Bhojpuri is often used in
            traditional folk songs, theater, and cultural performances,
            preserving its cultural heritage in Varanasi.
          </div>
        </div>

        <div className="LanguageCardOfKashi">
          <div>
            <img
              src="https://i.pinimg.com/736x/e3/88/44/e38844ef720e15f03af4cb1c05a7505f.jpg"
              alt=""
              className="LanguageCardImage"
            />
          </div>
          <div className="LanguageCardHeading">English</div>
          <div className="LanguageCardDetails">
            English is widely understood, especially among younger generations,
            educated professionals, and those involved in the tourism and
            hospitality sectors. Many signs, menus, and tourist information are
            available in English to cater to international visitors and
            facilitate communication.
          </div>
        </div>
      </div>

      <h1 className="aboutKashiHeading">Laws & Etiquette</h1>
      <div className="LawCardContainer">
        <div className="LawCard">
          <div className="HeadingOfLawCard">ETIQUETTE</div>
          <div>
            <FaRegStar className="iconsOfLawCard" />
          </div>
          <div className="DetailsofLawCard">
            Bad language, loud behavior, and encroaching on other people’s
            boundaries are considered disrespectful. Respectful public decorum
            is always advised.
          </div>
        </div>

        <div className="LawCard">
          <div className="HeadingOfLawCard">DEFACEMENT OF MONUMENTS</div>
          <div>
            <CgDanger className="iconsOfLawCard" />
          </div>
          <div className="DetailsofLawCard">
            Damaging or defacing historical monuments, temples, or public
            property is illegal and punishable under heritage conservation laws.
          </div>
        </div>
      </div>

      <h1 className="aboutKashiHeading">Religion</h1>
      <div className="religionCardContainer">
        <div className="religionCard">
          <div className="religionCard1">
            <div>
              <h1 className="religionCardHeading">Hinduism</h1>
              <div className="religionCardHeadingLine"></div>
            </div>
            <div>
              <img
                src="https://t4.ftcdn.net/jpg/02/65/79/51/360_F_265795179_8QIaynrdGtvvshYnICRKrB8vcEUtuxct.jpg"
                alt=""
                className="religionImage1"
              />
            </div>
            <div className="religionCardDetails">
              Kashi (a name popular with Hindu pilgrims for the city of
              Varanasi) is one of the holiest cities and centres of pilgrimage
              for Hindus of all denominations. It is one of the seven holiest
              cities (Sapta Puri) in Hinduism, and is considered by the faith as
              the giver of salvation (moksha). Over 50,0Brahmins live in Kashi,
              providing religious services to the masses. Hindus believe that
              bathing in the Ganges remits sins and that dying in Kashi ensures
              release of a person's soul from the cycle of its transmigration.
              Thus, many Hindus come here to die.In 2001, Hindus made up
              approximately 84% of the population of Varanasi district. As the
              home to the Kashi Vishwanath Temple Jyotirlinga, the city is
              especially sacred for followers of Shaivism. Kashi is also a
              Shakti Peetha, where the temple to goddess Vishalakshi stands,
              believed to be the location where the goddess Sati's earrings
              fell. Hindus of the Shakti sect make a pilgrimage to the city
              because they regard the Ganges itself to be the goddess Shakti.
              Adi Shankara wrote his commentaries on Hinduism here, and his
              efforts lead to the great Hindu revival as at that time Buddhism
              was widely practiced.
            </div>
          </div>

          <div className="religionCard1">
            <div>
              <h1 className="religionCardHeading">Islam</h1>
              <div className="religionCardHeadingLine"></div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?cs=srgb&dl=pexels-aqtai-2233416.jpg&fm=jpg"
                alt=""
                className="religionImage1"
              />
            </div>
            <div className="religionCardDetails">
              Approximately 250,000 Muslims reside in Varanasi. In 2001, they
              made up approximately 18% of the population of Varanasi district,
              and 29.7% of the city's population. Muslim settlement and
              influence began here following the invasion by Mohammad Ghaznavi
              (1021–1030 AD).[citation needed] The Muslim sacred places in the
              city are of seven categories which comprise 415 mosques (masjid),
              299 religious cultural sites called mazars, 197 crossings where
              the taziya procession crosses (known as imamchauks), 88 burial
              places called talaya, 11 special locations for prayer known as
              idgah, three sites for burying the taziyas, and 375 other
              religious sites.
            </div>
          </div>

          <div className="religionCard1">
            <div>
              <h1 className="religionCardHeading">Jainism</h1>
              <div className="religionCardHeadingLine"></div>
            </div>
            <div>
              <img
                src="https://psychopedia.in/wp-content/uploads/2023/10/THE-FOUR-NOBLE-TRUTHS-IN-BUDDHISM.png"
                alt=""
                className="religionImage1"
              />
            </div>
            <div className="religionCardDetails">
              Varanasi is a pilgrimage site or tirtha (holy place) for Jains, as
              four of their Tirthankaras were born here during the 8th century
              BC. In the 8th century BC, Parsvanatha, the 23rd Tirthankara, was
              born near Bhelupur in Varanasi, now identified with the
              Parshvanatha Jain temple; he propounded the triad-principle of the
              Mahavratas (great vows) – ahimsa ("non-violence"), asteya
              ("non-stealing") and aparigraha ("non-accumulation"). During
              archaeological excavations at this site, many Jain images were
              excavated which dated to the 9th–11th centuries BC, while a few
              images date to the 5th century BC. After Parsvanatha, Mahavira
              came here in the 6th century BC. It is also said to be the
              birthplace of Suparshvanatha though the exact location of his
              birth is not known. It is believed that the present Jain temple in
              Sarnath, near the Dhamekh Stupa, commemorates the birthplace of
              Shreyansnatha, the 11th Thirthankara who was born in the village
              of Simhapur. At Simhapur, there are two Jain temples, one of
              Svetamabara and the other of Digambara.
            </div>
          </div>
          <div className="religionCard1">
            <div>
              <h1 className="religionCardHeading">Sikhism</h1>
              <div className="religionCardHeadingLine"></div>
            </div>
            <div>
              <img
                src="https://news.wttw.com/sites/default/files/field/image/Sikhism.jpg"
                alt=""
                className="religionImage1"
              />
            </div>
            <div className="religionCardDetails">
              Guru Nanak came to Varanasi on two occasions. He came in 1502 as a
              young man on a pilgrimage. In 1506, he came for religious
              interaction with the sages of Banaras when he preached his dogma
              of Sikhism on the Maha Shivaratri festival day. The 9th Guru Tegh
              Bahadur (1664–1675) came to Varanasi in 1666 and the place where
              he resided is called Asu Bhairava Sangar (Nichibagh), which was
              also the place where Guru Gobind Singh the 10th and the last Guru
              also stayed. Gobind Singh had deputed five of his disciples to a
              school in Varanasi to learn Sanskrit and this school is still
              continuing; this is named as Guru Nanak Sanskrit Vidyalaya in
              Bisheshvarganj. Other notable religious places of the community
              are three sacred sites known as Sangats, and a monastery at
              Ramnagar which is stated to possess an original copy of the Guru
              Granth Sahib. There is also a grand Gurudwara near
              Augharnath-ka-Takia. A majority of Sikhs here are migrants from
              West Punjab in Pakistan who settled here after India's partition
              in 1947. The population of Sikhs was reported to be around 5,000.
            </div>
          </div>

          <div className="religionCard1">
            <div>
              <h1 className="religionCardHeading">Christianity</h1>
              <div className="religionCardHeadingLine"></div>
            </div>
            <div>
              <img
                src="https://assets.answersingenesis.org/img/cms/content/contentnode/og_image/christianity.jpg"
                alt=""
                className="religionImage1"
              />
            </div>
            <div className="religionCardDetails">
              In the 18th century under Warren Hastings's British
              administration, the city was under the East India Company. During
              this time, the company purposely promoted learning of Sanskrit and
              Hindu theology by instituting the Sanskrit School in 1791 to
              create a conducive climate to establish Christianity in the city,
              propagating Christian dogmas. In 1830, the first English Seminary,
              named Anglo-Indian Seminary, was instituted and Christian
              missionaries came to preach but it had no impact on the upper
              caste Hindus. It was only the lower class of the society, that too
              the untouchables, who embraced Christianity. However, with the end
              of British rule, Christianity did not expand any further in
              Varanasi. The city has 22 churches.[15] The Latin Catholic Diocese
              of Varanasi (Latin: Varanasien(sis)) is located in the city under
              the ecclesiastical province of Agra. St. Mary's Cathedral is
              notable. Under the Church of North India, which is the dominant
              United Protestant denomination in northern India, the Diocese of
              Lucknow, with its headquarters at Allahabad, has territorial
              jurisdiction also over Varanasi. Under this diocese, the St Thomas
              Church in Godowlia, in the heart of the Hindu dominated area of
              the city, is an ancient Protestant church. 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutKashi;