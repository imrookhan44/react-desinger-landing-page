import React, { useState } from 'react'
import product1 from "./../assets/pexels-monstera-6311612 3.png";
import product2 from "./../assets/pexels-dima-valkov-6211601 1.png";
import product3 from "./../assets/pexels-dima-valkov-6211614 1.png";
import product4 from "./../assets/pexels-dima-valkov-6402846 1.png";
import product5 from "./../assets/pexels-dima-valkov-6402848 1.png";
import product6 from "./../assets/pexels-monstera-6311612 3.png";
import product7 from "./../assets/pexels-dima-valkov-6511777 1.png";
import product8 from "./../assets/pexels-heitor-verdi-7665789 2.png";
function Products() {
  const productsData = [
    {
      id: 1, title: "Spread Collar Shirt", price: "$48.99", rating: "5.0", img: product1, bg: "#87CEFA"
    },
    {
      id: 2, title: "Spread Collar Shirt", price: "$48.99", rating: "5.0", img: product2, bg: "#EAEBF0"
    },
    {
      id: 3, title: "Spread Collar Shirt", price: "$48.99", rating: "5.0", img: product3, bg: "#ADD8E6"
    },
    {
      id: 4, title: "Spread Collar Shirt", price: "$48.99", rating: "5.0", img: product4, bg: "#D9D9D9"
    },
    {
      id: 5, title: "Spread Collar Shirt", price: "$48.99", rating: "5.0", img: product5, bg: "#F0F8FF"
    },
    {
      id: 6, title: "Spread Collar Shirt", price: "$48.99", rating: "5.0", img: product6, bg: "#B0E0E6"
    },
    {
      id: 7, title: "Spread Collar Shirt", price: "$48.99", rating: "5.0", img: product7, bg: "#FFF0F5"
    },
    {
      id: 8, title: "Spread Collar Shirt", price: "$48.99", rating: "5.0", img: product8, bg: "#F5F5DC"
    }
  ]
  const [active, setActive] = useState(1)
  return (
    <>
      <div className="container">
        <div className='products_title mb-5'>
          <h4>Our products</h4>
        </div>
        <div className="text-center products_menu-links">
          <ul>
            <li onClick={() => setActive(1)} className={`${active === 1 ? "active" : "unActive"}`}>sale</li>
            <li onClick={() => setActive(2)} className={`${active === 2 ? "active" : "unActive"}`}>hot</li>
            <li onClick={() => setActive(3)} className={`${active === 3 ? "active" : "unActive"}`}>new arrivals</li>
            <li onClick={() => setActive(4)} className={`${active === 4 ? "active" : "unActive"}`}>accessories</li>
          </ul>
        </div>
        <div className="products_div py-5">
          {
            productsData?.map(item => {
              return (
                <div>
                  <div className='image-bg'
                    style={
                      {
                        background: `${item.bg}`
                      }
                    }

                  >
                    <img src={item.img} alt="1" />
                  </div>
                  <div className="title">
                    <h6>{item.title}</h6>
                  </div>
                  <div className="price">
                    <p> {item.price}</p>
                    <div
                      style={{
                        width: "1px",
                        height: "20px",
                        background: "#454545",
                      }}
                    />
                    <p>{item.rating}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        {/* <div className="products">
          <div className="row mb-5">
            <div className="col-md-3">
              <div>
                <div className="first_selling_image">
                  <img src="" alt="" />
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
            <div className="col-md-3">
              <div>
                <div className="first_selling_image2">
                  <img src="" alt="" />
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
            <div className="col-md-3">
              <div>
                <div className="first_selling_image3">
                  <img src="" alt="" />
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
            <div className="col-md-3">
              <div>
                <div className="first_selling_image3">
                  <img src="" alt="" />
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
        </div> */}
      </div>
    </>

  )
}

export default Products