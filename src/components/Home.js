import React from "react";

function Home(props) {
  return (
    <div className="cart-list">
      <div>
        <h1>Home Component</h1>
        <div className="cart-wrapper">
          <div className="img-wrapper item">
            <img
              src="https://i.computer-bild.de/imgs/5/1/9/3/7/9/7/a263a7f0590a7bbc.jpg"
              alt=" randomImg"
            />
          </div>
          <div className="text-wrapper item">
            <span>I-Phone</span>
            <span>Price: $1000.00</span>
          </div>
          <div className="btn-wrapper item">
            <button
              onClick={() => {
                props.addToCartHandler({ pice: 1000, name: "i phone 11" });
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
