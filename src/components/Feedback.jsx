import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Feedback() {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <>
      <div className="container">
        <div className="text-center my-5 selling_heading">
          <h4 className="mb-5">Feedback Corner</h4>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          textAlign: "center",
          padding: "0 100px",
        }}
      >
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-padding-bottom"
          customButtonGroup={
            <>
              <div className="next_previous_icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="142"
                  height="142"
                  viewBox="0 0 142 142"
                  fill="none"
                >
                  <g filter="url(#filter0_d_1_32)">
                    <rect
                      x="51"
                      y="44"
                      width="40"
                      height="40"
                      rx="3"
                      fill="white"
                    />
                    <path
                      d="M74.071 57L67 64.0711"
                      stroke="#224F34"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M74.071 71.0713L67 64.0002"
                      stroke="#224F34"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_32"
                      x="0"
                      y="0"
                      width="142"
                      height="142"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="7" />
                      <feGaussianBlur stdDeviation="25.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_32"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_32"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="142"
                  height="142"
                  viewBox="0 0 142 142"
                  fill="none"
                >
                  <g filter="url(#filter0_d_1_27)">
                    <rect
                      x="51"
                      y="44"
                      width="40"
                      height="40"
                      rx="3"
                      fill="#C2EFD4"
                    />
                    <path
                      d="M67 57L74.0711 64.0711"
                      stroke="#224F34"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M67 71.0713L74.0711 64.0002"
                      stroke="#224F34"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_27"
                      x="0"
                      y="0"
                      width="142"
                      height="142"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="7" />
                      <feGaussianBlur stdDeviation="25.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_27"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_27"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </>
          }
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div>
            <div className="feedback_card">
              <p>“</p>
              <h4>Emily Wilson</h4>
              <h5>
                The customer experience was exceptional from start to finish.
                The website is user-friendly, the checkout process was smooth,
                and the clothes I ordered fit perfectly. I'm beyond satisfied!
              </h5>
            </div>
          </div>
          <div>
            <div>
              <div className="feedback_card" style={{ background: "#C2EFD4" }}>
                <p>“</p>
                <h4>Sarah Thompson </h4>
                <h5>
                  I absolutely love the quality and style of the clothing I
                  purchased from this website. customer service was outstanding,
                  and I received my order quickly. Highly recommended!
                </h5>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="feedback_card">
                <p>“</p>
                <h4>Olivia Martinez </h4>
                <h5>
                  I had a great experience shopping on this website. The clothes
                  I bought are fashionable and comfortable. Highly satisfied!
                </h5>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="feedback_card">
                <p>“</p>
                <h4>Emily Wilson</h4>
                <h5>
                  The customer experience was exceptional from start to finish.
                  The website is user-friendly, the checkout process was smooth,
                  and the clothes I ordered fit perfectly. I'm beyond satisfied!
                </h5>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Feedback;
