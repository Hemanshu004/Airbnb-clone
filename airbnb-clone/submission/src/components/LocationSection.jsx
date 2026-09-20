import React from 'react';


export default function LocationSection() {

  return (
    <>
              <section className="app-section" id="location">
                <h2 className="app-things-to-know">Where you’ll be</h2>
                <div className="locationsection-candolim-goa-india">Candolim, Goa, India</div>
                <div className="locationsection-div-2">
                  <div className="locationsection-div-4"></div>
                  <button className="locationsection-search" aria-label="Search">
                    <span style={{ width: "16px", height: "16px" }}>
                      <svg
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: "100%",
                          width: "100%",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          overflow: "visible",
                        }}
                      >
                        <circle
                          cx="14"
                          cy="14"
                          r="9"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></circle>
                        <path
                          d="M21 21l7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div className="locationsection-div-3">
                    <button aria-label="Zoom in">
                      <span className="ico">
                        <svg
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                          style={{
                            display: "block",
                            height: "100%",
                            width: "100%",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            overflow: "visible",
                          }}
                        >
                          <path
                            d="M16 6v20M6 16h20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </button>
                    <button aria-label="Zoom out">
                      <span className="ico">
                        <svg
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                          style={{
                            display: "block",
                            height: "100%",
                            width: "100%",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            overflow: "visible",
                          }}
                        >
                          <path
                            d="M6 16h20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="locationsection-div">
                    <svg
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "100%",
                        width: "100%",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        overflow: "visible",
                      }}
                    >
                      <path
                        d="M6 29h20M9 29V15l7-6 7 6v14M13 29v-7h6v7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="locationsection-div-5">
                  Exact location will be provided after booking.
                </div>
                <div className="locationsection-neighbourhood-highlights">Neighbourhood highlights</div>
                <div className="locationsection-div-6">
                  Located in the heart of Candolim, Amor de Goa offers a
                  peaceful stay with easy access to beaches, cafés, and popular
                  attractions.
                </div>
                <button className="locationsection-button" style={{ marginTop: "18px" }}>
                  Show more{" "}
                  <span className="locationsection-span">
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
              </section>
    </>
  );
}
