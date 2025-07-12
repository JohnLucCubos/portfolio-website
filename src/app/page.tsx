import Image from "next/image";
import React from 'react';
import BackgroundVideo from '@/components/BackgroundVideo';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <BackgroundVideo src="./videos/1.background.mp4" />
      <div className="text-white absolute top-0 left-0 w-72 h-9 z-10 bg-black bg-opacity-50 m-5 flex items-center" >
        <h1 className="font-bold text-left drop-shadow-lg ml-5">&#60;Portfolio&#62;</h1>
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 ml-5">
        <h1 className="text-white text-5xl font-bold text-left drop-shadow-lg">
          JOHN LUC CUBOS
        </h1>
        <div className="w-[99%] h-0.5 bg-white"></div>
        <h1 className="text-white text-2xl text-left drop-shadow-lg">
          久ボス・ジョンローック
        </h1>
        <h1 className="text-1xl font-bold text-left drop-shadow-lg mt-5">Game Developer</h1>
      </div>
      <div className="fixed w-full h-screen bottom-0 right-0">
      <Image
        src="./images/asterias.png"
        alt="light mode icon"
        width={50}
        height={50}
        />
      </div>
      {/*Body*/}
      <div>
        {/*Image for background*/}
        {/*Create a mask*/}
        {/*Name center left*/}

      </div>
      {/*Experience Page*/}
      <div>
        {/*Navigation panel*/}
        {/*Includes a dropdown*/}
        {/*Create Cards*/}
        {/*Style polaroids x 3*/}

        {/*Show all Button*/}
      </div>
      {/*About me Page*/}
      <div>

      </div>
      {/*Footer*/}
      {/*Contact Information*/}

      <div className="relative mt-[97vh] z-20">
        <h1 className="text-5xl ml-5">Experience</h1>
      </div>
      <div className="relative mt-[91vh] z-20">
        <h1 className="text-5xl ml-5">About Me</h1>
      </div>
      <div className="relative grid grid-cols-4 gap-4 p-5 z-20 bottom-0 left-0 w-full mt-[80vh]">
        <Contact
          src="./images/github.png"
          alt="GitHub Logo"
          link="https://github.com/JohnLucCubos"
          username="JohnLucCubos"
        />
        <Contact
          src="./images/linkedin.png"
          alt="Linkedin Logo"
          link="https://www.linkedin.com/in/john-luc-cubos/"
          username="John Luc Cubos"
        />
        <Contact
          src="./images/email.png"
          alt="Email Icon"
          link="mailto:johnluccubos01@gmail.com"
          username="johnluccubos01@gmail.com"
        />
      </div>
    </main>
  );
}
