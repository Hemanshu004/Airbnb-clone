import React from 'react';


export default function BookingCard() {

  return (
    <>
              <aside className="bookingcard-aside">
                <div className="bookingcard-bookingsticky" id="bookingSticky">
                  <div className="bookingcard-div-7">
                    <img
                      className="bookingcard-element-3"
                      src="/photos/icons/discount.svg"
                      alt=""
                      aria-hidden="true"
                    />
                    <div className="bookingcard-div-9">
                      Get 10% off your next stay.
                      <br />
                      <a href="#?modal=PHOTO_TOUR_SCROLLABLE#">
                        Terms apply
                      </a>
                    </div>
                    <button className="bookingcard-button" type="button">
                      Claim
                    </button>
                  </div>
                  <div className="bookingcard-div-8">
                    <div className="bookingcard-div-3">
                      <span className="bookingcard-28-499">₹28,499</span>
                      <span className="bookingcard-for-5-nights">for 5 nights</span>
                    </div>
                    <div className="bookingcard-div-2">
                      <div className="bookingcard-div-4">
                        <div className="bookingcard-div-6">
                          <div className="bookingcard-checkout">CHECK-IN</div>
                          <div className="bookingcard-2-guests">10/18/2026</div>
                        </div>
                        <div className="bookingcard-div-6">
                          <div className="bookingcard-checkout">CHECKOUT</div>
                          <div className="bookingcard-2-guests">10/23/2026</div>
                        </div>
                      </div>
                      <div className="bookingcard-div">
                        <div>
                          <div className="bookingcard-checkout">GUESTS</div>
                          <div className="bookingcard-2-guests">2 guests</div>
                        </div>
                        <span className="bookingcard-span">
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
                              d="M4 10l12 12 12-12"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="bookingcard-div-5">
                      Free cancellation before <b>17 October</b>
                    </div>
                    <button
                      className="bookingcard-element bookingcard-element-2"
                      type="button"
                      id="reserveBtn"
                    >
                      Reserve
                    </button>
                    <div className="bookingcard-you-won-t-be-charged-yet">You won't be charged yet</div>
                  </div>
                  <div className="bookingcard-div-10">
                    <span className="ico">
                      <svg
                        viewBox="0 0 16 16"
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
                        <path d="m7.5011 1c.5272 0 .9591.40794.99725.92537l.00275.07463v1h5.5c.31265 0 .5435.281645.4935.581075l-.01275.056285-.96125 3.36264.96125 3.36265c.08055.2818-.0967.5625-.36775.62465l-.0554.00945-.0576.00325h-5.5c-.5272 0-.9591-.40795-.99725-.92535l-.00275-.07465v-1h-5v6h-1v-14zm1 3h-1v4h1z"></path>
                      </svg>
                    </span>
                    <a href="#?modal=PHOTO_TOUR_SCROLLABLE#">
                      Report this listing
                    </a>
                  </div>
                </div>
              </aside>
    </>
  );
}
