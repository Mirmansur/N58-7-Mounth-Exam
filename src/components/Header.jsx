import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { IoLibrary } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Header = () => {
  return (
    <div className="Header bg-one text-two p-2  flex justify-between fixed left-0 w-[230px] ">
      <div className="container">
        <div className="All-two flex flex-col justify-between ">
          <div className="header ">
            <div className="head-one">
              <div className="one flex-col ">
                <NavLink
                  to="/"
                  className="flex items-center gap-4 mb-3    text-two  opacity-[70%]"
                >
                  <GoHomeFill className="text-2xl" />
                  <span className="font-sans font-bold text-lg">Home</span>
                </NavLink>
                <div className="seach flex  items-center gap-4  text-two  opacity-[70%] mb-3 cursor-pointer">
                  <FiSearch className="text-2xl" />
                  <span className="font-sans font-bold text-lg">Search</span>
                </div>
                <div className="librari flex items-center gap-4 mb-10    text-two  opacity-[70%] cursor-pointer">
                  <IoLibrary className="text-2xl" />
                  <span className="font-sans font-bold text-lg">Library</span>
                </div>
              </div>
              <div className="two flex flex-col">
                <NavLink to="/about" className="flex items-center gap-3 mb-2">
                  <button className="border w-[30px] h-[30px] flex justify-center items-center  bg-two  opacity-[70%] rounded-md">
                    <FaPlus className="text-one" />
                  </button>
                  <span className="font-sans font-bold text-[16px] w-[122px] text-two  opacity-[70%]">
                    Create Playlist
                  </span>
                </NavLink>
                <NavLink to="/like" className="flex items-center gap-3">
                  <button className="border-none w-[30px] h-[30px] flex justify-center items-center  bg-six  opacity-[70%] rounded-md ">
                    <CiHeart className="text-two text-xl" />
                  </button>
                  <span className="font-sans font-bold text-[16px] w-[110px] text-two  opacity-[70%]">
                    Liked Songs
                  </span>
                </NavLink>
              </div>
              <div className="header-three flex flex-col mt-10 ">
                <a
                  href=""
                  className="font-sans font-normal text-two  opacity-[70%] mb-1 cursor-pointer"
                >
                  Chill Mix
                </a>
                <a
                  href=""
                  className="font-sans font-normal text-two  opacity-[70%] mb-1 cursor-pointer"
                >
                  Insta Hits
                </a>

                <a
                  href=""
                  className="font-sans font-normal text-two  opacity-[70%] mb-1"
                >
                  Your Top Songs 2021
                </a>
                <a
                  href=""
                  className="font-sans font-normal text-two  opacity-[70%] mb-1 cursor-pointer"
                >
                  Mellow Songs
                </a>
                <a
                  href=""
                  className="font-sans font-normal text-two  opacity-[70%] mb-1 cursor-pointer w-[231px]"
                >
                  Anime Lofi & Chillhop Music
                </a>
                <a
                  href=""
                  className="font-sans font-normal text-two  opacity-[70%] mb-1 cursor-pointer"
                >
                  BG Afro “Select” Vibes
                </a>
                <a
                  href=""
                  className="font-sans font-normal text-two  opacity-[70%] mb-1 cursor-pointer"
                >
                  Afro “Select” Vibes
                </a>
                <a
                  href=""
                  className="font-sans font-normal text-two  opacity-[70%] mb-1 cursor-pointer"
                >
                  Happy Hits!
                </a>
                <a
                  href=""
                  className="font-sans font-normal text-two  opacity-[70%] mb-1 cursor-pointer"
                >
                  Deep Focus
                </a>
                <a
                  href=""
                  className="font-sans font-normal text-two  opacity-[70%] mb-1 cursor-pointer"
                >
                  Instrumental Study
                </a>
                <a
                  href=""
                  className="font-sans font-normal text-two  opacity-[70%] mb-1 cursor-pointer"
                >
                  Instrumental Study
                </a>
                <a
                  href=""
                  className="font-sans font-normal text-two  opacity-[70%] mb-1 cursor-pointer"
                >
                  Nostalgia for old souled mill...
                </a>
                <a
                  href=""
                  className="font-sans font-normal text-two  opacity-[70%] mb-1 cursor-pointer"
                >
                  Mixed Feelings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
