import React, { ReactElement } from "react";

interface Props {}

export default function Hero({}: Props): ReactElement {
  return (
    <section
      className="flex flex-col justify-center items-center pl-6 pr-6 text-center bg-no-repeat"
      style={{
        backgroundImage: `url(
        https://zenkit.com/wp-content/uploads/2020/03/bg-to-do-13.jpg
        )`,
      }}
    >
      <div className="text-center mt-2 max-w-full">
        <h1 className="font-bold text-6xl tracking-wide ">To Do. Done.</h1>
        <h2 className="font-normal text-4xl tracking-wide">
          Simple task management for you and your team
        </h2>
      </div>

      <div className="mt-8 mb-8">
        <img
          className="ml-auto mr-auto block w-3/4"
          alt="banner"
          src="https://zenkit.com/wp-content/uploads/2020/04/zenkit-to-do-en-1.png"
        />
      </div>

      <div className=" hidden flex w-3/4 justify-between items-center mt-8">
        <div className="w-2/5 mt-0 ml-auto mr-auto">
          <a
            className="inline-block w-full h-auto"
            href="https://apps.apple.com/us/app/zenkit-to-do/id1505294836"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="w-full  "
              src="https://zenkit.com/wp-content/uploads/2018/05/apple_app_store_badge.svg"
              alt="Badge of Apple App Store"
            />
          </a>
        </div>
        <div className="w-2/5 mt-0 ml-auto mr-auto">
          <a
            className="inline-block w-full h-auto"
            href="https://play.google.com/store/apps/details?id=com.zenkit.todo"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="w-full  "
              src="https://zenkit.com/wp-content/uploads/2018/05/google-play-badge.png"
              alt="Badge of Google Play"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
