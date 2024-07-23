import React from "react";
import "./Home.scss";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
const Home = () => {

  const slides = [
    {url: "https://plus.unsplash.com/premium_photo-1719850361637-b9514dfbee5b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "forrest"},
    {url: "https://images.unsplash.com/photo-1720549385830-905a78562bbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D", title: "forrest"},
  ]
  return (
    <div className="home_container">
      <ImageSlider slides={slides} />
      {/* <div className="socials">
        <ul>
          <li>
            <Link to='/' className="link">Instagram</Link>
          </li>
          <li>
            <Link to='/' className="link">Facebook</Link>
          </li>
          <li>
            <Link to='/' className="link">linkedIn</Link>
          </li>
        </ul>
      </div>
      <div className="main_home">
        <img src="/img/banner.png" alt="" />
      </div> */}
    </div>
  );
};

export default Home;
