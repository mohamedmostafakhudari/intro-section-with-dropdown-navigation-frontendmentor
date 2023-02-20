import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-between container mx-auto  md:flex-row-reverse md:gap-16 lg:px-24 lg:gap-32">
        <div className="py-2">
          <picture className="">
            <source
              media="(min-width:768px)"
              srcSet="./assets/images/image-hero-desktop.png"
            />
            <img
              src="./assets/images/image-hero-mobile.png"
              alt="hero"
              className=""
            />
          </picture>
        </div>
        <div className="container mx-auto px-3 text-[17px]">
          <div className="text-center py-10 md:text-left md:px-0">
            <h1 className="font-bold text-almostBlack text-4xl md:text-5xl lg:text-7xl lg:max-w-[11ch]">
              Make remote work
            </h1>
            <p className="text-mediumGray py-6 leading-relaxed md:py-12 md:max-w-[42ch] md:text-primary">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <a
              href="#"
              className="bg-almostBlack text-almostWhite font-bold p-3 px-6 block w-fit mx-auto border border-almostBlack rounded-[15px] duration-200 ease-in-out hover:text-almostBlack hover:bg-almostWhite md:ml-0"
            >
              Learn more
            </a>
          </div>
          <div className="flex items-center gap-8 mt-3 md:mt-20">
            <div>
              <img src="./assets/images/client-databiz.svg" alt="databiz" />
            </div>
            <div>
              <img
                src="./assets/images/client-audiophile.svg"
                alt="audiophile"
              />
            </div>
            <div>
              <img src="./assets/images/client-meet.svg" alt="meet" />
            </div>
            <div>
              <img src="./assets/images/client-maker.svg" alt="maker" />
            </div>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-0 bg-White w-full text-sm">
        <p className="py-3 text-center">
          Made With &lt;3 by{" "}
          <span className="text-mediumGray font-bold text-primary">
            Mohamed Mostafa
          </span>
        </p>
      </footer>
    </>
  );
}

export default App;
