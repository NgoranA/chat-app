import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEllipsisVertical,
  faMicrophone,
  faPaperclip,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import data from "@emoji-mart/data";
// import Picker from '@emoji-mart/react'

const Main = () => {
  return (
    <>
      <main className="h-screen w-full flex flex-col justify-between ">
        <div className="bg-slate-100  px-5 py-2  flex border-l-slate-400 border-l-2 items-center justify-between">
          <Image
            className="cursor-pointer hover:opacity-80 rounded-full "
            src="https://links.papareact.com/gll"
            alt="profile"
            height={40}
            width={40}
          />
          <div>
            <button className="rounded-full text-blue-500  h-8 w-8 text-center">
              <FontAwesomeIcon icon={faInfo} className="text-lg" />
            </button>
            <button className="rounded-full text-blue-500   h-8 w-8 text-center">
              <FontAwesomeIcon icon={faEllipsisVertical} className="text-lg" />
            </button>
          </div>
        </div>
        <div className="bg-slate-100 flex items-center justify-between py-3 px-4">
          <button className="rounded-full h-8 w-8">
            <FontAwesomeIcon icon={faSmile} className="text-lg text-blue-400" />
          </button>
          <button className="rounded-full h-8 w-8">
            <FontAwesomeIcon
              icon={faPaperclip}
              className="text-lg text-blue-400"
            />
          </button>
          <input
            type="text"
            className="w-[86%] outline-none px-3 py-2 rounded-lg"
          />
          <button className="rounded-full h-8 w-8">
            <FontAwesomeIcon
              icon={faMicrophone}
              className="text-lg text-blue-400"
            />
          </button>
        </div>
      </main>
    </>
  );
};

export default Main;
