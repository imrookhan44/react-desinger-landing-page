import React from "react";
import image from "../assets/Mask group.png";
function Home() {
  return (
    <div className="home_bg">
      <div className="container">
        <div className="row">
          <div className="col-md-6 first_home_col">
            <div className="home_text">
              <h3>Discover and Find Your Own Fashion!</h3>
            </div>
            <div className="home_text1">
              <p>
                Explore our curated collection of stylish clothing and
                accessories tailored to your unique taste.
              </p>
            </div>
            <button>Explore Now</button>
          </div>
          <div className="col-md-6">
            <div className="home_image">
              <svg xmlns="http://www.w3.org/2000/svg" className="dots_home" width="156" height="110" viewBox="0 0 156 110" fill="none">
                <circle cx="4" cy="4" r="4" fill="#328B56" />
                <circle cx="4" cy="38" r="4" fill="#328B56" />
                <circle cx="4" cy="72" r="4" fill="#328B56" />
                <circle cx="4" cy="106" r="4" fill="#328B56" />
                <circle cx="41" cy="4" r="4" fill="#328B56" />
                <circle cx="41" cy="38" r="4" fill="#328B56" />
                <circle cx="41" cy="72" r="4" fill="#328B56" />
                <circle cx="41" cy="106" r="4" fill="#328B56" />
                <circle cx="78" cy="4" r="4" fill="#328B56" />
                <circle cx="78" cy="38" r="4" fill="#328B56" />
                <circle cx="78" cy="72" r="4" fill="#328B56" />
                <circle cx="78" cy="106" r="4" fill="#328B56" />
                <circle cx="115" cy="4" r="4" fill="#328B56" />
                <circle cx="115" cy="38" r="4" fill="#328B56" />
                <circle cx="115" cy="72" r="4" fill="#328B56" />
                <circle cx="115" cy="106" r="4" fill="#328B56" />
                <circle cx="152" cy="4" r="4" fill="#328B56" />
                <circle cx="152" cy="38" r="4" fill="#328B56" />
                <circle cx="152" cy="72" r="4" fill="#328B56" />
                <circle cx="152" cy="106" r="4" fill="#328B56" />
              </svg>
              <img src={image} alt="" />
              <svg xmlns="http://www.w3.org/2000/svg" className="dots_home2" width="156" height="110" viewBox="0 0 156 110" fill="none">
                <circle cx="4" cy="4" r="4" fill="#328B56" />
                <circle cx="4" cy="38" r="4" fill="#328B56" />
                <circle cx="4" cy="72" r="4" fill="#328B56" />
                <circle cx="4" cy="106" r="4" fill="#328B56" />
                <circle cx="41" cy="4" r="4" fill="#328B56" />
                <circle cx="41" cy="38" r="4" fill="#328B56" />
                <circle cx="41" cy="72" r="4" fill="#328B56" />
                <circle cx="41" cy="106" r="4" fill="#328B56" />
                <circle cx="78" cy="4" r="4" fill="#328B56" />
                <circle cx="78" cy="38" r="4" fill="#328B56" />
                <circle cx="78" cy="72" r="4" fill="#328B56" />
                <circle cx="78" cy="106" r="4" fill="#328B56" />
                <circle cx="115" cy="4" r="4" fill="#328B56" />
                <circle cx="115" cy="38" r="4" fill="#328B56" />
                <circle cx="115" cy="72" r="4" fill="#328B56" />
                <circle cx="115" cy="106" r="4" fill="#328B56" />
                <circle cx="152" cy="4" r="4" fill="#328B56" />
                <circle cx="152" cy="38" r="4" fill="#328B56" />
                <circle cx="152" cy="72" r="4" fill="#328B56" />
                <circle cx="152" cy="106" r="4" fill="#328B56" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
