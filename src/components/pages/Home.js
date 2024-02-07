import React from "react";
import Form from "../Form";
// import header from "../assets/header.jpg";

const Home = () => {
  return (
    <div>
      <main>
        <section>
          <div>
            <div className="description">
              <img
                src={require("../../assets/header.jpg")}
                alt="..."
                className="img"
              />
              <p className="p-description">
                Where tradition meets innovation in the realm of Italian
                culinary art. We specialize in crafting authentic traditional
                recipes, elevated with a modern flair to deliver an
                unforgettable and genuine dining experience. Each dish prepared
                in our kitchen reflects our passion for fresh ingredients and
                the authenticity of Italian gastronomy.
              </p>
            </div>
          </div>
          <div className="review">
            <div className="rev1"></div>
            <div className="rev2"></div>
            <div className="rev3"></div>
            <div className="rev4"></div>
          </div>
        </section>
      </main>
      <Form />
    </div>
  );
};

export default Home;
