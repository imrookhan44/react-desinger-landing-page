import React from "react";
import selling1 from "./../assets/elegant-woman-straw-hat-isolated 2.png";
import selling2 from "./../assets/vknivfu sdkvbjieurg kjvn 1.png";
import selling3 from "./../assets/pexels-dima-valkov-6211617 1.png";

function Designers() {
  return (
    <>
      <div className="container">
        <div className="text-center my-5 selling_heading">
          <h4 className="mb-5">Designer Clothes For You</h4>
          <p>
            Immerse yourself in the world of luxury fashion with our
            meticulously crafted designer clothes!{" "}
          </p>
        </div>
        <div className="designers">
          <div className="row mb-5">
            <div className="col-md-4">
              <div>
                <div className="first_selling_image">
                  <img src={selling1} alt="" />
                </div>
                <div className="title">
                  <h6>Accessories</h6>
                </div>
                <p>
                  Complete your ensemble with designer accessories such as
                  handbags, scarves, belts, and hats.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <div className="first_selling_image2">
                  <img src={selling2} alt="" />
                </div>
                <div className="title">
                  <h6>Dresses</h6>
                </div>
                <p>
                  Explore a stunning range of designer dresses, including
                  evening gowns and chic day dresses.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <div className="first_selling_image3">
                  <img src={selling3} alt="" />
                </div>
                <div className="title">
                  <h6>Outerwear</h6>
                </div>
                <p>
                  Browse luxurious designer coats, jackets, and blazers to stay
                  stylishly warm during colder seasons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Designers;
