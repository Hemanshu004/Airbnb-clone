import React from 'react';


export default function SecondaryNav({ isSecondaryNavVisible }) {

  return (
    <>
        <div
          className={`secondarynav-element ${isSecondaryNavVisible ? "secondarynav-element-3" : ""}`}
          id="secondarynav-element"
          aria-hidden={!isSecondaryNavVisible}
        >
          <div className="secondarynav-div-4">
            <nav className="secondarynav-listing-sections" aria-label="Listing sections">
              <a
                href="#?modal=PHOTO_TOUR_SCROLLABLE#photos"
                data-target="photos"
                className="secondarynav-element-2"
              >
                Photos
              </a>
              <a
                href="#?modal=PHOTO_TOUR_SCROLLABLE#amenities"
                data-target="amenities"
              >
                Amenities
              </a>
              <a
                href="#?modal=PHOTO_TOUR_SCROLLABLE#reviews"
                data-target="reviews"
              >
                Reviews
              </a>
              <a
                href="#?modal=PHOTO_TOUR_SCROLLABLE#location"
                data-target="location"
              >
                Location
              </a>
            </nav>
            <div className="secondarynav-div-3">
              <div className="secondarynav-div-2">
                <div>
                  <span className="secondarynav-28-499">₹28,499</span>{" "}
                  <span className="secondarynav-for-5-nights">for 5 nights</span>
                </div>
                <div className="secondarynav-div">
                  <span className="secondarynav-span" aria-hidden="true"></span> 4.95 ·{" "}
                  <span className="sn-reviews">19 reviews</span>
                </div>
              </div>
              <button className="bookingcard-element secondarynav-button" type="button">
                Reserve
              </button>
            </div>
          </div>
        </div>
    </>
  );
}
