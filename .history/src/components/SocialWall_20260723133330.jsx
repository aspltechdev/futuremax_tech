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

  "https://www.instagram.com/p/Bo4IFb5nUjm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

  "https://www.instagram.com/p/Bo7E2DTHd6p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

  "https://www.instagram.com/p/BrvCk-1jhSY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

  "https://www.instagram.com/p/BsDo5KEjTzP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

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

             Connecting
  Every
  Space.


            </h2>

          </div>

          <div className="instagramHeaderRight">

            <p>

             Follows our latest Mobile Signal Booster
  installations, RF engineering projects,
  DAS deployments, and enterprise wireless
  connectivity solutions across India.
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