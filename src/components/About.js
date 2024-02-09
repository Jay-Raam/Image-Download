import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import Image01 from "../image/a1.jpg";
import Image02 from "../image/a2.jpg";
import Image03 from "../image/m1.webp";
import Image04 from "../image/m2.webp";
import Image05 from "../image/m3.webp";
import Image06 from "../image/m4.webp";
import Image07 from "../image/m12.jpeg";
import Image08 from "../image/a4.webp";
import Image09 from "../image/a5.jpeg";
import Image012 from "../image/m6.jpeg";
import Image010 from "../image/a6.webp";
import Image011 from "../image/a7.jpg";

const About = () => {
  return (
    <div className="About">
      <div className="about-2">
        <div className="container">
          <div className="home">
            <div className="text">
              <h1>Explore, Discover, and Be Inspired!</h1>
              <p>
                Welcome to our gallery app, where you can explore a vast
                collection of stunning images sourced from the Pexels API.
                Whether you're seeking inspiration, looking for high-quality
                visuals for your projects, or simply appreciate the beauty of
                photography, our gallery app has something for everyone.
              </p>
              <div className="button">
                <ul className="main-9">
                  <li className="main-10">
                    <Link to="/image" className="cta">
                      {" "}
                      <span className="hover-underline-animation"> Image</span>
                      <svg
                        id="arrow-horizontal"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="10"
                        viewBox="0 0 46 16"
                      >
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                          transform="translate(30)"
                        ></path>
                      </svg>
                    </Link>
                  </li>
                  <li className="main-10">
                    <Link to="/video" className="cta">
                      {" "}
                      <span className="hover-underline-animation"> Video</span>
                      <svg
                        id="arrow-horizontal"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="10"
                        viewBox="0 0 46 16"
                      >
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                          transform="translate(30)"
                        ></path>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="image">
              <img src={Image01} alt="home_image" className="gal-1" />
            </div>
          </div>
        </div>
      </div>
      {/* expolre section */}
      <div className="explore">
        <div className="container">
          <div className="flex-1">
            <p>
              <span>B</span>reathtaking landscapes and awe-inspiring nature
              scenes to striking portraits and vibrant cityscapes, our gallery
              app offers a diverse range of categories to explore. Whether
              you're a nature enthusiast, an architecture aficionado, or a fan
              of street photography, you'll find an abundance of images to
              captivate your imagination.
            </p>
                       <ul className="main-9">
          <li className="main-10">
            <Link to="/image" className="cta">
              {" "}
              <span className="hover-underline-animation"> Image</span>
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                ></path>
              </svg>
            </Link>
          </li>
        </ul>
          </div>
        </div>
      </div>

      {/* unique section */}
      <div className="unique">
        <div className="container">
          <div className="image-2">
            <img src={Image02} alt="unique_image" className="gal-1" />
          </div>
          <div>
            <p className="para">
              We harness the power of the Pexels API to provide you with an
              extensive array of images spanning various categories, themes, and
              moods. With just a few clicks, you can immerse yourself in a world
              of captivating visuals, curated to inspire and delight.
            </p>
          </div>
        </div>
      </div>

      {/* image previews */}

      <div className="image_preview">
        <div className="container">
          <div className="main-6">
            <img src={Image03} alt="one" className="main-87" />
            <img src={Image04} alt="two" className="main-87"/>
            <img src={Image05} alt="three" className="main-87"/>
            <img src={Image06} alt="four" className="main-87"/>
            <img src={Image07} alt="five" className="main-87"/>
            <img src={Image08} alt="six" className="main-87"/>
            <img src={Image09} alt="seven" className="main-87"/>
            <img src={Image010} alt="eight" className="main-87"/>
            <img src={Image011} alt="nine" className="main-87"/>
            <img src={Image012} alt="ten" className="main-87"/>
          </div>
        </div>
      </div>

      {/* today expolre */}
      <div className="explore">
        <div className="container">
          <div className="flex-2">
            <h1>Ready to a visual journey like no other?</h1>
            <div className="back"></div>
            <p>
              <span>O</span>ur gallery app today and experience the magic of
              Pexels API-powered imagery. Whether you're seeking a moment of
              inspiration or simply looking to brighten your day with beautiful
              visuals, our gallery app is here to ignite your imagination and
              elevate your browsing experience.
            </p>
         <ul className="main-9">
          <li className="main-10">
            <Link to="/video" className="cta">
              {" "}
              <span className="hover-underline-animation"> Video</span>
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                ></path>
              </svg>
            </Link>
          </li>
        </ul>
          </div>
        </div>
      </div>

      {/* contact */}
      <div className="copyright">
        <div className="container">
          <div className="text-2">
            <p>All copyright resevred by Jayasriraam😎</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
