import React from "react";
import selling1 from "./../assets/pexels-dima-valkov-6211621 1.png";
import selling2 from "./../assets/pexels-dima-valkov-6211616 (1) 2.png";
import selling3 from "./../assets/pexels-dima-valkov-6503007 3.png";

function BestSelling() {
  return (
    <div className="container">
      <div className="text-center my-5 selling_heading">
        <h4>Best selling</h4>
        <p>
          Get in on the trend with our curated selection of best-selling styles.
        </p>
      </div>
      <div className="products">
        <div className="row mb-5">
          <div className="col-md-4">
            <div>
              <div className="first_selling_image">
                <img src={selling1} alt="" />
              </div>
              <div className="title">
                <h6>Regular Fit Long Sleeve Top</h6>
              </div>
              <div className="price">
                <p> $38.99</p>
                <div
                  style={{
                    width: "1px",
                    height: "20px",
                    background: "#454545",
                  }}
                />
                <p>5.0</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <div className="first_selling_image2">
                <img src={selling2} alt="" />
              </div>
              <div className="title">
                <h6>Black Crop Tailored Jacket</h6>
              </div>
              <div className="price">
                <p> $62.99</p>
                <div
                  style={{
                    width: "1px",
                    height: "20px",
                    background: "#454545",
                  }}
                />
                <p>4.9</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <div className="first_selling_image3">
                <img src={selling3} alt="" />
              </div>
              <div className="title">
                <h6>Textured Sunset Shirt</h6>
              </div>
              <div className="price">
                <p> $49.99</p>
                <div
                  style={{
                    width: "1px",
                    height: "20px",
                    background: "#454545",
                  }}
                />
                <p>5.0</p>
              </div>
            </div>
          </div>
        </div>
        <div iv className="seeAllButton text-center mb-5">
          <button>See all  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
            <path d="M23.7071 8.70711C24.0976 8.31658 24.0976 7.68342 23.7071 7.29289L17.3431 0.928932C16.9526 0.538408 16.3195 0.538408 15.9289 0.928932C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM0 9L23 9V7L0 7L0 9Z" fill="#224F34" />
          </svg></button>
        </div>
      </div>
    </div>
  );
}

export default BestSelling;
