import React from "react";
import HomeText from "../HeroText/homeText";
import Drawer from "../Drawer";
import { Link } from "react-router-dom";

export default function HomeNav({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-[#FCBF49] border-gray-200 px-2 sm:px-4 py-2.5 lg:px-auto">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <Link to={"/Home"}>
  <div
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              <HomeText text="Roslind"/>
            </div>
            </Link>
    <div 
     onClick={() => setNavbarOpen(!navbarOpen)}
    data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3" aria-controls="navbar-default" aria-expanded="false">
       <div
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                 <Drawer/>
                </div>
      
    </div>
  </div>
</nav>
    </>
  );
}