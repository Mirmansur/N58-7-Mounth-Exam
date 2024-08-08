import { MdPersonAdd } from "react-icons/md";
import { TbBrandXFilled } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="Footer bg-one text-two p-2 fixed right-0 top-0  ">
      <div className="container">
        <div className="footer flex flex-col ">
          <div className="foot-one flex items-center gap-20 text-two opacity-[70%]">
            <div className="foot-word">
              <p className="font-sans font-bold text-lg w-[141px]">
                Friend Activity
              </p>
            </div>
            <div className="foot-icons flex items-center gap-2 cursor-pointer">
              <MdPersonAdd size={24} />
              <TbBrandXFilled size={24} />
            </div>
          </div>
          <div className="foot-two">
            <p className="font-sans font-medium text-lg w-[304px] text-two opacity-[70%] mt-10">
              Let friends and followers on Spotify see what you’re listening to.
            </p>
          </div>
          <div className="foot-three mt-10 flex  flex-col gap-3">
            <div className="person flex items-center gap-2   ">
              <div className="person-one w-[62px] h-[62px] bg-two opacity-[70%] text-one flex items-center justify-center rounded-[50%]">
                <IoPerson size={40} />
              </div>
              <div className="person-two">
                <div className="per-one bg-two opacity-[70%] w-[102px] h-[10px] rounded-xl mb-1"></div>
                <div className="per-two  bg-two opacity-[70%] w-[79px] h-[10px] rounded-xl mb-1"></div>
                <div className="per-three  bg-two opacity-[70%] w-[79px] h-[10px] rounded-xl"></div>
              </div>
            </div>
            <div className="person flex items-center gap-2   ">
              <div className="person-one w-[62px] h-[62px] bg-two opacity-[70%] text-one flex items-center justify-center rounded-[50%]">
                <IoPerson size={40} />
              </div>
              <div className="person-two">
                <div className="per-one bg-two opacity-[70%] w-[102px] h-[10px] rounded-xl mb-1"></div>
                <div className="per-two  bg-two opacity-[70%] w-[79px] h-[10px] rounded-xl mb-1"></div>
                <div className="per-three  bg-two opacity-[70%] w-[79px] h-[10px] rounded-xl"></div>
              </div>
            </div>
            <div className="person flex items-center gap-2   ">
              <div className="person-one w-[62px] h-[62px] bg-two opacity-[70%] text-one flex items-center justify-center rounded-[50%]">
                <IoPerson size={40} />
              </div>
              <div className="person-two">
                <div className="per-one bg-two opacity-[70%] w-[102px] h-[10px] rounded-xl mb-1"></div>
                <div className="per-two  bg-two opacity-[70%] w-[79px] h-[10px] rounded-xl mb-1"></div>
                <div className="per-three  bg-two opacity-[70%] w-[79px] h-[10px] rounded-xl"></div>
              </div>
            </div>
          </div>
          <div className="foot-four">
            <p className="font-sans font-medium w-[306px] mt-10 text-two opacity-[70%]">
              Go to Settings Social and enable “Share my listening activity on
              Spotify.’ You can turn this off at any time.
            </p>
          </div>
          <div className="four-five flex  justify-center mt-10">
            <button className="border-none bg-two text-one p-2 w-[213px] rounded-2xl">
              SETTINGS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
