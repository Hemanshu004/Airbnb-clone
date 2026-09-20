import React, { useState, useEffect, useRef } from "react";
import PhotoTour from "./components/PhotoTour";
import Lightbox from "./components/Lightbox";
import Header from "./components/Header";
import SecondaryNav from "./components/SecondaryNav";
import HeroGallery from "./components/HeroGallery";
import ListingInfo from "./components/ListingInfo";
import AmenitiesSection from "./components/AmenitiesSection";
import BookingCard from "./components/BookingCard";
import ReviewsSection from "./components/ReviewsSection";
import LocationSection from "./components/LocationSection";
import HostSection from "./components/HostSection";
import NearbyStays from "./components/NearbyStays";
import "./index.css";

export default function App() {

  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [, setToastMessage] = useState("");
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [toastTimeout, setToastTimeout] = useState(null);
  const [isSecondaryNavVisible, setIsSecondaryNavVisible] = useState(false);

  const showToast = (message) => {
    setToastMessage(message);
    if (toastTimeout) clearTimeout(toastTimeout);
    const newTimeout = setTimeout(() => {
      setToastMessage("");
    }, 3000);
    setToastTimeout(newTimeout);
  };

  const handleShareClick = () => {
    showToast("Link copied to clipboard");
  };

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
    showToast(isSaved ? "Removed from saved" : "Saved to wishlists");
  };

  const openPhotoTour = () => setIsPhotoTourOpen(true);
  const closePhotoTour = () => setIsPhotoTourOpen(false);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };
  const closeLightbox = () => setIsLightboxOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroGrid = document.getElementById("app-element-6");
      if (heroGrid) {
        const bottom = heroGrid.getBoundingClientRect().bottom;
        if (bottom < 0) {
          setIsSecondaryNavVisible(true);
        } else {
          setIsSecondaryNavVisible(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="_sKkGf">
        <div className="app-banner-container">
          <a
            href="#?modal=PHOTO_TOUR_SCROLLABLE#"
            className="app-banner-link"
          >
            Learn more about Guest Favourites
          </a>
        </div>
      </div>
      <Header isSaved={isSaved} handleShareClick={handleShareClick} handleSaveClick={handleSaveClick} />
      <main>
        <div className="app-div-16">
          <SecondaryNav isSecondaryNavVisible={isSecondaryNavVisible} />
          <HeroGallery isSaved={isSaved} handleShareClick={handleShareClick} handleSaveClick={handleSaveClick} openPhotoTour={openPhotoTour} />
            <section
              className="app-element-6"
              id="app-element-6"
              aria-label="Photos of this place"
            >
              <div className="app-herogrid" id="heroGrid">
                <button
                  className="app-element-10"
                  type="button"
                  onClick={openPhotoTour}
                  aria-label="Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 1"
                >
                  <img
                    src="/photos/hero/hero-01-living-room-wide.jpeg"
                    alt=""
                    decoding="async"
                    loading="eager"
                  />
                </button>
                <button
                  className="app-element-10"
                  type="button"
                  onClick={openPhotoTour}
                  aria-label="Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 2"
                >
                  <img
                    src="/photos/hero/hero-02-bedroom.jpeg"
                    alt=""
                    decoding="async"
                    loading="lazy"
                  />
                </button>
                <button
                  className="app-element-10"
                  type="button"
                  onClick={openPhotoTour}
                  aria-label="Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 3"
                >
                  <img
                    src="/photos/hero/hero-03-hot-tub.jpeg"
                    alt=""
                    decoding="async"
                    loading="lazy"
                  />
                </button>
                <button
                  className="app-element-10"
                  type="button"
                  onClick={openPhotoTour}
                  aria-label="Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 4"
                >
                  <img
                    src="/photos/hero/hero-04-living-room-sofa.jpeg"
                    alt=""
                    decoding="async"
                    loading="lazy"
                  />
                </button>
                <button
                  className="app-element-10"
                  type="button"
                  onClick={openPhotoTour}
                  aria-label="Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 5"
                >
                  <img
                    src="/photos/hero/hero-05-exterior-aerial.jpeg"
                    alt=""
                    decoding="async"
                    loading="lazy"
                  />
                </button>
              </div>
              <button
                className="app-element-11"
                type="button"
                id="showAllPhotos"
                onClick={openPhotoTour}
              >
                <span className="app-span">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      height: "100%",
                      width: "100%",
                      fill: "currentColor",
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
                    ></path>
                  </svg>
                </span>{" "}
                Show all photos
              </button>
            </section>

          <div className="app-div-12">
            <div className="app-contentleft" id="contentLeft">
              <ListingInfo isDescExpanded={isDescExpanded} setIsDescExpanded={setIsDescExpanded} />
              <AmenitiesSection />
                <div className="app-div-4">
                  <div>
                    <div className="app-div-15">
                      <div className="listinginfo-living-room">5 nights in Candolim</div>
                      <div className="listinginfo-div-10">18 Oct 2026 - 23 Oct 2026</div>
                    </div>
                    <div className="app-div-9">
                      <div className="app-div-5">
                        <button aria-label="Previous month">
                          <span className="ico">
                            <svg
                              viewBox="0 0 18 18"
                              role="presentation"
                              aria-hidden="true"
                              focusable="false"
                              style={{
                                display: "block",
                                height: "100%",
                                width: "100%",
                                fill: "currentColor",
                              }}
                            >
                              <path
                                d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </button>
                        <button aria-label="Next month">
                          <span className="ico">
                            <svg
                              viewBox="0 0 18 18"
                              role="presentation"
                              aria-hidden="true"
                              focusable="false"
                              style={{
                                display: "block",
                                height: "100%",
                                width: "100%",
                                fill: "currentColor",
                              }}
                            >
                              <path
                                d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="app-div-2">
                        <div className="app-november-2026">October 2026</div>
                        <div className="app-div-3">
                          <span>S</span>
                          <span>M</span>
                          <span>T</span>
                          <span>W</span>
                          <span>T</span>
                          <span>F</span>
                          <span>S</span>
                        </div>
                        <div className="app-div-7">
                          <div className="app-29 app-div-6"></div>
                          <div className="app-29 app-div-6"></div>
                          <div className="app-29 app-div-6"></div>
                          <div className="app-29 app-div-6"></div>
                          <div className="app-29">1</div>
                          <div className="app-29">2</div>
                          <div className="app-29">3</div>
                          <div className="app-29">4</div>
                          <div className="app-29">5</div>
                          <div className="app-29">6</div>
                          <div className="app-29">7</div>
                          <div className="app-29">8</div>
                          <div className="app-29">9</div>
                          <div className="app-29">10</div>
                          <div className="app-29">11</div>
                          <div className="app-29">12</div>
                          <div className="app-29">13</div>
                          <div className="app-29">14</div>
                          <div className="app-29">15</div>
                          <div className="app-29">16</div>
                          <div className="app-29">17</div>
                          <div className="app-29 app-18">18</div>
                          <div className="app-29 app-22">19</div>
                          <div className="app-29 app-22">20</div>
                          <div className="app-29 app-22">21</div>
                          <div className="app-29 app-22">22</div>
                          <div className="app-29 app-23">23</div>
                          <div className="app-29">24</div>
                          <div className="app-29">25</div>
                          <div className="app-29">26</div>
                          <div className="app-29">27</div>
                          <div className="app-29">28</div>
                          <div className="app-29">29</div>
                          <div className="app-29">30</div>
                          <div className="app-29">31</div>
                        </div>
                      </div>
                      <div className="app-div-2">
                        <div className="app-november-2026">November 2026</div>
                        <div className="app-div-3">
                          <span>S</span>
                          <span>M</span>
                          <span>T</span>
                          <span>W</span>
                          <span>T</span>
                          <span>F</span>
                          <span>S</span>
                        </div>
                        <div className="app-div-7">
                          <div className="app-29">1</div>
                          <div className="app-29">2</div>
                          <div className="app-29">3</div>
                          <div className="app-29">4</div>
                          <div className="app-29">5</div>
                          <div className="app-29">6</div>
                          <div className="app-29">7</div>
                          <div className="app-29">8</div>
                          <div className="app-29">9</div>
                          <div className="app-29">10</div>
                          <div className="app-29">11</div>
                          <div className="app-29">12</div>
                          <div className="app-29">13</div>
                          <div className="app-29">14</div>
                          <div className="app-29">15</div>
                          <div className="app-29">16</div>
                          <div className="app-29">17</div>
                          <div className="app-29 app-20">18</div>
                          <div className="app-29 app-20">19</div>
                          <div className="app-29 app-20">20</div>
                          <div className="app-29 app-20">21</div>
                          <div className="app-29 app-20">22</div>
                          <div className="app-29 app-20">23</div>
                          <div className="app-29 app-20">24</div>
                          <div className="app-29">25</div>
                          <div className="app-29">26</div>
                          <div className="app-29">27</div>
                          <div className="app-29">28</div>
                          <div className="app-29 app-20">29</div>
                          <div className="app-29 app-20">30</div>
                        </div>
                      </div>
                    </div>
                    <div className="app-div-13">
                      <span className="app-span-2" aria-hidden="true">
                        <svg
                          viewBox="0 0 32 22"
                          width="20"
                          height="14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        >
                          <rect
                            x="1"
                            y="1"
                            width="30"
                            height="20"
                            rx="3"
                          ></rect>
                          <path d="M6 7h.01M11 7h.01M16 7h.01M21 7h.01M26 7h.01M6 12h.01M26 12h.01M9 16h14"></path>
                        </svg>
                      </span>
                      <button className="app-clear-dates">Clear dates</button>
                    </div>
                  </div>
                </div>

            </div>
            <BookingCard />
          </div>
          <div className="app-widesections" id="wideSections">
            <ReviewsSection />
            <LocationSection />
            <HostSection />
              <section className="app-section">
                <h2 className="app-things-to-know">Things to know</h2>
                <div className="app-div-14">
                  <div className="app-div">
                    <div className="ico">
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: "100%",
                          width: "100%",
                          fill: "currentColor",
                        }}
                      >
                        <path d="m12 0v2h8v-2h2v2h6c1.1045695 0 2 .8954305 2 2v21c0 2.7614237-2.2385763 5-5 5h-18c-2.76142375 0-5-2.2385763-5-5v-21c0-1.1045695.8954305-2 2-2h6v-2zm16 12h-24v13c0 1.6568542 1.34314575 3 3 3h18c1.6568542 0 3-1.3431458 3-3zm-8.2071068 2.2928932 1.4142136 1.4142136-3.7921068 3.7928932 3.7921068 3.7928932-1.4142136 1.4142136-3.7928932-3.7921068-3.7928932 3.7921068-1.4142136-1.4142136 3.7921068-3.7928932-3.7921068-3.7928932 1.4142136-1.4142136 3.7928932 3.7921068zm-9.7928932-10.2928932h-6v6h24v-6h-6v2h-2v-2h-8v2h-2z"></path>
                      </svg>
                    </div>
                    <div className="listinginfo-living-room">Cancellation policy</div>
                    <p>
                      Free cancellation before 17 October. Cancel before
                      check-in on 18 October for a partial refund.
                    </p>
                    <p>Review this host’s full policy for details.</p>
                    <a
                      className="app-element-9"
                      href="#?modal=PHOTO_TOUR_SCROLLABLE#"
                    >
                      Learn more
                    </a>
                  </div>
                  <div className="app-div">
                    <div className="ico">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: "100%",
                          width: "100%",
                          fill: "currentColor",
                        }}
                      >
                        <path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z"></path>
                      </svg>
                    </div>
                    <div className="listinginfo-living-room">House rules</div>
                    <p>Check-in after 2:00 pm</p>
                    <p>Checkout before 11:00 am</p>
                    <p>3 guests maximum</p>
                    <a
                      className="app-element-9"
                      href="#?modal=PHOTO_TOUR_SCROLLABLE#"
                    >
                      Learn more
                    </a>
                  </div>
                  <div className="app-div">
                    <div className="ico">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: "100%",
                          width: "100%",
                          fill: "currentColor",
                        }}
                      >
                        <path d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm-1 3a22.2 22.2 0 0 1-9.65 3.15L5 6.97V17.5c0 6.56 4.35 11 10 11.46zm2 0v25.16c5.65-.47 10-4.9 10-11.46V6.97l-.35-.02A22.2 22.2 0 0 1 17 3.8z"></path>
                      </svg>
                    </div>
                    <div className="listinginfo-living-room">Safety &amp; property</div>
                    <p>Carbon monoxide alarm not reported</p>
                    <p>Smoke alarm not reported</p>
                    <p>Exterior security cameras on property</p>
                    <a
                      className="app-element-9"
                      href="#?modal=PHOTO_TOUR_SCROLLABLE#"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </section>

            <NearbyStays />
          </div>
        </div>
      </main>

      {isPhotoTourOpen && (
        <PhotoTour
          isOpen={isPhotoTourOpen}
          onClose={closePhotoTour}
          onPhotoClick={openLightbox}
        />
      )}

      {isLightboxOpen && (
        <Lightbox
          isOpen={isLightboxOpen}
          onClose={closeLightbox}
          currentIndex={lightboxIndex}
          setCurrentIndex={setLightboxIndex}
        />
      )}
    </>
  );
}
