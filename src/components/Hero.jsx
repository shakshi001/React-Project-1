const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <div className="main-content">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </div>
        <div className="side-content">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </div>
        <div clssName="hero-button">
          <button className="btn-1">Shop Now</button>
          <button className="btn-2">Category</button>
        </div>

        <div className="shopping">
          <p>Available on</p>
          <div className="brand-icon">
            <img src="Images/flipkart.png" alt="flipkart" />
            <img src="Images/amazon.png" alt="amazon" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="Images/shoes.png" alt="shoes-images" />
      </div>
    </main>
  );
};

export default Hero;
