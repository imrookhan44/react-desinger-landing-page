import React from "react";
import offerImage from "./../assets/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing 1.png";
function Offers() {
  return (
    <>
      <div className="container">
        <div className="offer_main-div">
          <div className="row">
            <div className="col-md-5">
              <div className="offer_image-main-div">

                <div className="offer_image">
                  <img src={offerImage} alt="" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 156 110" fill="none">
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
            <div className="col-md-6">
              <div className="offer_text">
                <div>
                  <h4>Exclusive offer</h4>
                </div>
                <div>
                  <p>
                    Unlock the ultimate style upgrade with our exclusive offer
                    Enjoy savings of up to 40% off on our latest New Arrivals
                  </p>
                </div>
                <div className="boxes">
                  <div className="box">
                    <h5>06</h5>
                    <div>
                      <h5>Days</h5>
                    </div>
                  </div>
                  <div className="box">
                    <h5>10</h5>
                    <div>
                      <h5>Hours</h5>
                    </div>
                  </div>
                  <div className="box">
                    <h5> 49</h5>
                    <div>
                      <h5>Minutes</h5>
                    </div>
                  </div>
                </div>
                <div className="button_offer">
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offers;
