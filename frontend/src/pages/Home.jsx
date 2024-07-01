import React from "react";
import NavbarHome from "../components/NavbarHome";
import tinyDesktopEngineer from "../assets/gif/tiny-desktop-engineer.gif";

const Home = () => {
  return (
    <>
      <NavbarHome />

      <main className=" flex h-svh bg-[#1a1a1a] justify-center">
        <img src={tinyDesktopEngineer} alt="GIF" />
      </main>
    </>
  );
};

export default Home;
