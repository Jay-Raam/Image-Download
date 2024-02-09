import React, { useState, useEffect } from "react";
import "./image.css";
import { Link } from "react-router-dom";

const PexelsImages = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showImage, setShowImage] = useState(null);
  const [perPage, setPerPage] = useState(50);
  const [loading, setLoading] = useState(false); // New loading state

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);

        const API_KEY =
          "Q3AiW7OoFtr3exI14eeBvGxvMDkReaWEGX7dKWakTgApg1l1o7R7wWdB";
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=${perPage}`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );
        const data = await response.json();
        console.log(data.photos);
        setImages(data.photos);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false); 
      }
    };

    if (searchQuery !== "") {
      fetchImages();
    }
  }, [searchQuery, perPage]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleShowImage = (image) => {
    setShowImage(image);
  };

  const handleClose = () => {
    setShowImage(null);
  };

  const handleLoadMore = () => {
    setPerPage(perPage + 10);
  };

  return (
    <div className="Image">
      <div className="input-container">
        <input type="text" value={searchQuery} onChange={handleSearchChange} />
        <label htmlFor="input" className="label">
          Search Image
        </label>
        <div className="underline"></div>
      </div>

      <div className="button center">
        <ul className="main-9">
          <li className="main-10">
            <Link to="/" className="cta">
              {" "}
              <span className="hover-underline-animation"> About</span>
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

      {/* Render loading animation if loading */}
      {loading && (
        <div className="newtons-cradle">
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
        </div>
      )}

      <div className="container">
        <ul className="flex-4">
          {images.map((image) => (
            <li key={image.id} className="main-77">
              <div>
                <img
                  src={image.src.medium}
                  alt={image.photographer}
                  className="flex-4"
                  onClick={() => handleShowImage(image)}
                />
                <a href={image.downloadLink} download>
                  <button
                    type="button"
                    name="download"
                    className="download-btn"
                  >
                    Download
                  </button>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Render selected image container if showImage is not null */}
      {showImage && (
        <div className="container fixed">
          <ul className="one-1">
            <li className="one-2">
              <span className="close" onClick={handleClose}>
                &times;
              </span>

              <div className="main-56">
                <a
                  href={showImage.src.landscape}
                  download={showImage.src.landscape}
                >
                  <img
                    src={showImage.src.landscape}
                    alt={showImage.alt}
                    className="one-3 hide"
                  />
                </a>
                <a href={showImage.src.original} download>
                  <img
                    src={showImage.src.original}
                    alt={showImage.alt}
                    className="one-3 show"
                  />
                </a>
                <a href={showImage.src.portrait} download>
                  <img
                    src={showImage.src.portrait}
                    alt={showImage.alt}
                    className="one-3 hide show gal_9"
                  />
                </a>
              </div>
              <div className="flex-09">
                <button className="main-34">
                  <a
                    href={showImage.url}
                    className="btn2"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="spn2">{showImage.photographer}</span>
                  </a>
                </button>

                <button className="main-34">
                  <a
                    href={showImage.photographer_url}
                    className="btn2"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="spn2">Contact Us</span>
                  </a>
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
      {/* Load More button */}
    {images.length > 0 && (
      <div className="center">
        <button onClick={handleLoadMore} className="btn-4">
          <span className="box">Load More!</span>
        </button>
      </div>
    )}
    </div>
  );
};

export default PexelsImages;
