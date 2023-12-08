"use client";

import { useEffect } from "react";

export default function Home() {
  // Select HTML elements by their IDs and assign them to variables
  const day = document.getElementById("days");
  const hour = document.getElementById("hours");
  const min = document.getElementById("minutes");
  const sec = document.getElementById("seconds");

  // Select elements for flipping sheets and assign them to variables
  const dayFlip = document.getElementById("flip-sheet-day");
  const hourFlip = document.getElementById("flip-sheet-hour");
  const minFlip = document.getElementById("flip-sheet-min");
  const secFlip = document.getElementById("flip-sheet-sec");

  // Initialize countdown values
  let days = 48;
  let hours = 23;
  let minutes = 59;
  let seconds = 59;

  useEffect(() => {
    const timer = () => {
      dayValue();
      hourValue();
      minValue();
      secValue();

      seconds--;

      if (seconds < 0 && minutes > 0) {
        seconds = 59;
        minutes--;
        flip_anime(minFlip);
      }

      if (minutes <= 0 && hours > 0) {
        minutes = 59;
        hours--;
        flip_anime(hourFlip);
      }

      if (hours <= 0 && days > 0) {
        hours = 23;
        days--;
        flip_anime(dayFlip);
      }

      if (seconds < 0 && hours == 0 && minutes == 0 && days == 0) {
        clearInterval(stopTimer);
        clearInterval(stopAnime);
      }
    };
    const dayValue = () => {
      if (day) {
        if (days < 10) {
          day.innerText = `0${days}`;
        } else {
          day.innerText = `${days}`;
        }
      }
    };
    const hourValue = () => {
      if (hour) {
        if (hours < 10) {
          hour.innerText = `0${hours}`;
        } else {
          hour.innerText = `${hours}`;
        }
      }
    };
    const minValue = () => {
      if (min) {
        if (minutes < 10) {
          min.innerText = `0${minutes}`;
        } else {
          min.innerText = `${minutes}`;
        }
      }
    };
    const secValue = () => {
      if (sec) {
        if (seconds < 10) {
          sec.innerText = `0${seconds}`;
        } else {
          sec.innerText = `${seconds}`;
        }
      }
    };
    const flip_anime_sec = () => {
      if (secFlip) secFlip.classList.toggle("flip");
    };
    const flip_anime = (obj: any) => {
      obj.classList.add("flip");

      setTimeout(() => {
        obj.classList.remove("flip");
      }, 1000);
    };

    timer();
    const stopAnime = setInterval(flip_anime_sec, 1000);
    const stopTimer = setInterval(timer, 1000);
    // return () => {
    //   clearInterval(stopAnime);
    //   clearInterval(stopTimer);
    // };
  }, []);

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
          experience – big things coming soon!
        </div>

        <section className="countdown-timer mt-10">
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
        </section>
      </div>
    </main>
  );
}
