import React from "react";

import {
  FaInstagram,
} from "react-icons/fa6";

import {
  BsArrowUpRight,
  BsStars,
} from "react-icons/bs";

import {
  InstagramEmbed,
} from "react-social-media-embed";

import "./SocialWall.css";

/* =========================================================
   INSTAGRAM POSTS
========================================================= */

const posts = [

  "https://www.instagram.com/globetech_ngo/reel/DYcJk9-zJdD/",

  "https://www.instagram.com/globetech_ngo/p/DYZn0GGT2yH/",

  "https://www.instagram.com/globetech_ngo/p/DYXAAsYE85Y/",

  "https://www.instagram.com/globetech_ngo/p/DYUczWXEwEt/",

];

/* =========================================================
   COMPONENT
========================================================= */

export default function SocialWall() {

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

              Real
              Community
              Stories.

            </h2>

          </div>

          <div className="instagramHeaderRight">

            <p>

              Follow our latest social
              impact initiatives, training
              sessions and transformative
              stories directly from our
              Instagram community.

            </p>

          </div>

        </div>

      </div>

      {/* =========================================================
          RUNNING CARDS
      ========================================================== */}

      <div className="instagramMarqueeWrapper">

        <div className="instagramMarqueeTrack">

          {[...posts, ...posts].map(
            (url, index) => (

              <div
                className="instagramCard"
                key={index}
              >

                {/* TOP */}

                <div className="instagramCardTop">

                  <div className="instagramProfile">

                    <div className="instagramIcon">

                      <FaInstagram />

                    </div>

                    <div>

                      <h4>

                        globetech_ngo

                      </h4>

                      <span>

                        Social Impact Foundation

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

                  <InstagramEmbed
                    url={url}
                    width="100%"
                  />

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>

  );

}