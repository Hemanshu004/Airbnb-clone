import React from 'react';


export default function HeroGallery({ isSaved, handleShareClick, handleSaveClick, openPhotoTour }) {

  return (
    <>
            <section className="herogallery-photos" id="photos">
              <h1 className="herogallery-h1">
                Romantic Jacuzzi 1BHK Candolim | Mirashya UG10
              </h1>
              <div className="herogallery-div">
                <button
                  className="phototour-share"
                  type="button"
                  id="shareBtn"
                  onClick={handleShareClick}
                >
                  <span className="herogallery-span">
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
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        overflow: "visible",
                      }}
                    >
                      <path
                        d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289"
                        fill="none"
                      ></path>
                    </svg>
                  </span>
                  <span className="herogallery-share">Share</span>
                </button>
                <button
                  className={`phototour-share ${isSaved ? "herogallery-element" : ""}`}
                  type="button"
                  id="saveBtn"
                  onClick={handleSaveClick}
                >
                  <span className="herogallery-span">
                    {isSaved ? (
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
                          fill: "#FF385C",
                          stroke: "#FF385C",
                          strokeWidth: "2",
                          overflow: "visible",
                        }}
                      >
                        <path d="M16 28C7 22 3 16 3 10.5A6.5 6.5 0 0 1 16 8a6.5 6.5 0 0 1 13 2.5C29 16 25 22 16 28z"></path>
                      </svg>
                    ) : (
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
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          overflow: "visible",
                        }}
                      >
                        <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                      </svg>
                    )}
                  </span>
                  <span className="herogallery-share">{isSaved ? "Saved" : "Save"}</span>
                </button>
              </div>
            </section>
    </>
  );
}
