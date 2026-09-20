import React from 'react';


export default function NearbyStays() {
  const [simPage, setSimPage] = React.useState(1);
  const totalSimPages = 3;
  const simTrackRef = React.useRef(null);

  const handleSimNext = () => {
    if (simPage < totalSimPages && simTrackRef.current) {
      simTrackRef.current.scrollBy({
        left: simTrackRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handleSimPrev = () => {
    if (simPage > 1 && simTrackRef.current) {
      simTrackRef.current.scrollBy({
        left: -simTrackRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  React.useEffect(() => {
    const track = simTrackRef.current;
    if (!track) return;
    const handleScroll = () => {
      const page = Math.round(track.scrollLeft / track.clientWidth) + 1;
      setSimPage(page);
    };
    track.addEventListener("scroll", handleScroll);
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
              <section className="app-section">
                <div className="nearbystays-div-3">
                  <h2 className="app-things-to-know" style={{ margin: "0px" }}>
                    More stays nearby
                  </h2>
                  <div className="nearbystays-div">
                    <span className="nearbystays-span">
                      {simPage} / {totalSimPages}
                    </span>
                    <button
                      className="nearbystays-element"
                      id="simPrev"
                      onClick={handleSimPrev}
                      disabled={simPage === 1}
                    >
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
                    <button
                      className="nearbystays-element"
                      id="simNext"
                      onClick={handleSimNext}
                      disabled={simPage === totalSimPages}
                    >
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
                </div>
                <div className="nearbystays-simtrack" id="simTrack" ref={simTrackRef}>
                  <div className="nearbystays-div-2">
                    <img src="/photos/raw/s1.jpeg" alt="" loading="lazy" />
                    <div className="listinginfo-living-room">
                      Beautiful Studio with a view to die for
                    </div>
                    <div className="p">
                      ₹23,600 &nbsp;{" "}
                      <span className="star">
                        <svg
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
                          <path
                            fillRule="evenodd"
                            d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                          ></path>
                        </svg>
                      </span>{" "}
                      4.91
                    </div>
                  </div>
                  <div className="nearbystays-div-2">
                    <img src="/photos/raw/s2.jpeg" alt="" loading="lazy" />
                    <div className="listinginfo-living-room">
                      NAQAB - 1bhk with private pool
                    </div>
                    <div className="p">
                      ₹42,218 &nbsp;{" "}
                      <span className="star">
                        <svg
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
                          <path
                            fillRule="evenodd"
                            d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                          ></path>
                        </svg>
                      </span>{" "}
                      4.95
                    </div>
                  </div>
                  <div className="nearbystays-div-2">
                    <img src="/photos/raw/s3.jpeg" alt="" loading="lazy" />
                    <div className="listinginfo-living-room">
                      Greentique Luxury Flat with plunge pool, Calangute
                    </div>
                    <div className="p">
                      ₹44,506 &nbsp;{" "}
                      <span className="star">
                        <svg
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
                          <path
                            fillRule="evenodd"
                            d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                          ></path>
                        </svg>
                      </span>{" "}
                      4.94
                    </div>
                  </div>
                  <div className="nearbystays-div-2">
                    <img
                      src="/photos/tour/living-room-1/living-room-1-01-wide-angle.jpeg"
                      alt=""
                      loading="lazy"
                    />
                    <div className="listinginfo-living-room">
                      The Tropical Studio | 5 mins to Beach
                    </div>
                    <div className="p">
                      ₹22,824 &nbsp;{" "}
                      <span className="star">
                        <svg
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
                          <path
                            fillRule="evenodd"
                            d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                          ></path>
                        </svg>
                      </span>{" "}
                      4.96
                    </div>
                  </div>
                  <div className="nearbystays-div-2">
                    <img
                      src="/photos/tour/living-room-1/living-room-1-01-wide-angle.jpeg"
                      alt=""
                      loading="lazy"
                    />
                    <div className="listinginfo-living-room">
                      Luxury Casa Bella 1BHK with plunge pool, Calangute
                    </div>
                    <div className="p">
                      ₹39,942 &nbsp;{" "}
                      <span className="star">
                        <svg
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
                          <path
                            fillRule="evenodd"
                            d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                          ></path>
                        </svg>
                      </span>{" "}
                      4.95
                    </div>
                  </div>
                  <div className="nearbystays-div-2">
                    <img
                      src="/photos/tour/living-room-1/living-room-1-01-wide-angle.jpeg"
                      alt=""
                      loading="lazy"
                    />
                    <div className="listinginfo-living-room">
                      Kanso by Earthen Window | Jacuzzi | Terrace | Pool
                    </div>
                    <div className="p">
                      ₹45,648 &nbsp;{" "}
                      <span className="star">
                        <svg
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
                          <path
                            fillRule="evenodd"
                            d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                          ></path>
                        </svg>
                      </span>{" "}
                      5.0
                    </div>
                  </div>
                  <div className="nearbystays-div-2">
                    <img
                      src="/photos/tour/living-room-1/living-room-1-01-wide-angle.jpeg"
                      alt=""
                      loading="lazy"
                    />
                    <div className="listinginfo-living-room">
                      Luxury Apt | Private Pool | 6 Mins from Beach
                    </div>
                    <div className="p">
                      ₹48,786 &nbsp;{" "}
                      <span className="star">
                        <svg
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
                          <path
                            fillRule="evenodd"
                            d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                          ></path>
                        </svg>
                      </span>{" "}
                      4.93
                    </div>
                  </div>
                  <div className="nearbystays-div-2">
                    <img
                      src="/photos/tour/living-room-1/living-room-1-01-wide-angle.jpeg"
                      alt=""
                      loading="lazy"
                    />
                    <div className="listinginfo-living-room">
                      Serendipity Cottage - Calm Stay in Calangute-Baga.
                    </div>
                    <div className="p">
                      ₹22,824 &nbsp;{" "}
                      <span className="star">
                        <svg
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
                          <path
                            fillRule="evenodd"
                            d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                          ></path>
                        </svg>
                      </span>{" "}
                      4.92
                    </div>
                  </div>
                </div>
              </section>
    </>
  );
}
