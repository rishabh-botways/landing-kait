"use client";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="brand netra">
        <div>
          <img
            src="netraEye.png"
            className="brand-image"
            alt="Netra AI"
            width="75px"
          ></img>
        </div>
        <div className="brand-text">NETRA AI</div>
      </div>
      <video
        src="bgVideo.mp4"
        muted
        loop
        playsInline
        autoPlay
        className="video-bg"
        poster="bgblack.svg"
      />
      <div className="Main flex flex-col content-center justify-center">
        <div className="flex flex-col content-center justify-center flex-wrap">
          <img
            src="kaitHome.png"
            className="select-none kait-home "
            alt="Kait AI"
          ></img>
          <h1 className="text-center tagline">A NEW TYPE OF EMPLOYEE.</h1>
        </div>
        <div className="mt-10 flex justify-center text-[28px] w-[1400px] m-auto text-center">
          We are currently revitalizing Kait with exciting new features, awesome
          additions, and plenty of bells and whistles. Get ready for a whole new
          experience &hyphen; big things coming soon!
        </div>

        {/* <section className="countdown-timer mt-10">
          <div className="countdown-info">
            <div className="timer-box">
              <div id="flip-sheet-day" className="sheet"></div>
              <div className="circle-left"></div>
              <p id="days" className="primary">
                00
              </p>
              <div className="circle-right"></div>
            </div>

            <p className="sub-heading">DAYS</p>
          </div>

          <div className="countdown-info">
            <div className="timer-box">
              <div id="flip-sheet-hour" className="sheet"></div>
              <div className="circle-left"></div>
              <p id="hours" className="primary">
                00
              </p>
              <div className="circle-right"></div>
            </div>
            <p className="sub-heading">HOURS</p>
          </div>

          <div className="countdown-info">
            <div className="timer-box">
              <div id="flip-sheet-min" className="sheet"></div>
              <div className="circle-left"></div>
              <p id="minutes" className="primary">
                00
              </p>
              <div className="circle-right"></div>
            </div>
            <p className="sub-heading">MINUTES</p>
          </div>

          <div className="countdown-info">
            <div className="timer-box">
              <div id="flip-sheet-sec" className="sheet"></div>
              <div className="circle-left"></div>
              <p id="seconds" className="primary">
                00
              </p>
              <div className="circle-right"></div>
            </div>
            <p className="sub-heading">SECONDS</p>
          </div>
        </section> */}
      </div>
    </main>
  );
}
