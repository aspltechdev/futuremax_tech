import React, { useState } from "react";

import {
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";

import {
  BsArrowUpRight,
  BsStars,
} from "react-icons/bs";

import {
  InstagramEmbed,
  FacebookEmbed,
} from "react-social-media-embed";

import "./SocialWall.css";

/* =========================================================
   INSTAGRAM POSTS
========================================================= */

const instagramPosts = [

  "https://www.instagram.com/p/Bo4IFb5nUjm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

  "https://www.instagram.com/p/Bo7E2DTHd6p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

  "https://www.instagram.com/p/BrvCk-1jhSY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

  "https://www.instagram.com/p/BsDo5KEjTzP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

];

/* =========================================================
   FACEBOOK POSTS
   (replace these with your actual Facebook post/video URLs)
========================================================= */

const facebookPosts = [

  "https://www.facebook.com/futuremaxtechnology/posts/pfbid0ev6axCQjWggfHUAGuJuLMdZNM4WQNxAZpFHjsdUyqScGWHkshSt8ZS4XKtq8pWPNl",

  "https://www.facebook.com/futuremaxtechnology/posts/pfbid04ZtMq8XzCM1tFcStz6HvYMQEjJ4SD3c2p77vgppeBhhiWWWWNvVGN6noZHFxRF52l",

  "https://www.facebook.com/futuremaxtechnology/posts/pfbid02gA4jKJEx3DLhzifvvaLpgGLYnWxHfAQQ9gXrDaq5N9pa9JAbzFDPtXhkejWo9Wxnl",

  "https://www.facebook.com/photo/?fbid=827858496021859&set=a.449517227189323",

];

/* =========================================================
   COMPONENT
========================================================= */

export default function SocialWall() {

  const [activeTab, setActiveTab] = useState("instagram");

  const posts = activeTab === "instagram" ? instagramPosts : facebookPosts;

  return (

    <section className="instagramWallSection">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="socialGlow glowLeft"></div>
      <div className="socialGlow glowRight"></div>

      {/* =========================================================
          HEADER
      ========================================================== */}

      <div className="instagramWallHeader">

        {/* <div className="socialBadge">

          <BsStars />

          Live Instagram Stories

        </div> */}

        <div className="instagramHeaderGrid">

          <div className="instagramHeaderLeft">

            <h2>

             Connecting
  Every
  Space.


            </h2>

          </div>

          <div className="instagramHeaderRight">

            <p>

             Follow our latest Mobile Signal Booster
  installations, RF engineering projects,
  DAS deployments, and enterprise wireless
  connectivity solutions across India.
            </p>

          </div>

        </div>

        {/* =========================================================
            SOCIAL TOGGLE BUTTONS
        ========================================================== */}

        <div className="socialToggleWrapper">

          <button
            className={`socialToggleBtn ${
              activeTab === "instagram" ? "active" : ""
            }`}
            onClick={() => setActiveTab("instagram")}
          >

            <FaInstagram />

            Instagram

          </button>

          <button
            className={`socialToggleBtn ${
              activeTab === "facebook" ? "active" : ""
            }`}
            onClick={() => setActiveTab("facebook")}
          >

            <FaFacebook />

            Facebook

          </button>

        </div>

      </div>

      {/* =========================================================
          RUNNING CARDS
      ========================================================== */}

      <div className="instagramMarqueeWrapper">

        <div
          className="instagramMarqueeTrack"
          key={activeTab}
        >

          {[...posts, ...posts].map(
            (url, index) => (

              <div
                className="instagramCard"
                key={`${activeTab}-${index}`}
              >

                {/* TOP */}

                <div className="instagramCardTop">

                  <div className="instagramProfile">

                    <div className="instagramIcon">

                      {activeTab === "instagram" ? (

                        <FaInstagram />

                      ) : (

                        <FaFacebook />

                      )}

                    </div>

                    <div>

                      <h4>

                        futuremax

                      </h4>

                      <span>

                        {/* Social Impact Foundation */}

                      </span>

                    </div>

                  </div>

                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="visitBtn"
                  >

                    <BsArrowUpRight />

                  </a>

                </div>

                {/* EMBED */}

                <div className="instagramEmbedWrapper">

                  {activeTab === "instagram" ? (

                    <InstagramEmbed
                      url={url}
                      width="100%"
                    />

                  ) : (

                    <FacebookEmbed
                      url={url}
                      width="100%"
                    />

                  )}

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>

  );

}