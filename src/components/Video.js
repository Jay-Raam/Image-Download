import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./video.css";

const PexelsVideos = () => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [perPage, setPerPage] = useState(50);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const API_KEY =
          "Q3AiW7OoFtr3exI14eeBvGxvMDkReaWEGX7dKWakTgApg1l1o7R7wWdB";
        const response = await fetch(
          `https://api.pexels.com/videos/search?query=${searchQuery}&per_page=${perPage}`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );
        const data = await response.json();
        console.log(data.videos);
        setVideos(data.videos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setLoading(false);
      }
    };

    if (searchQuery !== "") {
      fetchVideos();
    }
  }, [searchQuery, perPage]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLoadMore = () => {
    setPerPage(perPage + 10);
  };

  return (
    <div className="Video">
      <div className="input-container">
        <input type="text" value={searchQuery} onChange={handleSearchChange} />
        <label htmlFor="input" className="label">
          Search Video
        </label>
        <div className="underline"></div>
      </div>

      <div className="button center">
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

      {/* Video container */}
      <div className="container">
        {loading ? (
          <div className="newtons-cradle">
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
          </div>
        ) : (
          videos.map((video) => (
            <div key={video.id} className="video-2">
              {video.video_files?.length > 0 && (
                <video
                  controls
                  muted
                  style={{ width: "300px" }}
                  className="main-45"
                >
                  <source
                    src={video.video_files[0].link}
                    type="video/mp4"
                    className="find"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
              <p className="author">By: {video.user.name}</p>
            </div>
          ))
        )}
      </div>

      {/* Load More button */}
      {videos.length > 0 && (
        <div className="center">
          <button onClick={handleLoadMore} className="btn-4">
            <span className="box">Load More!</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default PexelsVideos;
