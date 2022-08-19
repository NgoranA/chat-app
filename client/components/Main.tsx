import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEllipsisVertical,
  faMicrophone,
  faPaperclip,
  faPaperPlane,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import data from "@emoji-mart/data";
import Aside from "./Aside";
// import Picker from '@emoji-mart/react'

const Main = () => {
  const [message, setmessage] = useState("");
  const [openInfo, setOpenInfo] = useState(false);
  return (
    <>
      <main className="h-screen w-full flex flex-col justify-between ">
        <header className="bg-slate-100  px-5 py-2   flex border-l-slate-300  border-l items-center justify-start">
          <Image
            className="cursor-pointer hover:opacity-80 rounded-full "
            src="https://links.papareact.com/gll"
            alt="profile"
            height={40}
            width={40}
          />
          <div className="flex justify-between flex-1 pl-7">
            <div>
              <p>Ngoran@gmail.com</p>
              <p className="text-xs text-slate-400">last seen: Now</p>
            </div>
            <div>
              <button
                onClick={() => setOpenInfo(!openInfo)}
                className="rounded-full text-blue-500  h-8 w-8 text-center"
              >
                <FontAwesomeIcon icon={faInfo} className="text-lg" />
              </button>
              <button className="rounded-full text-blue-500   h-8 w-8 text-center">
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  className="text-lg"
                />
              </button>
            </div>
          </div>
        </header>
        <div className="bg-scroll bg-no-repeat flex flex-col  bg-cover h-screen bg-[url('../public/wp.jpg')]">
          <span className="bg-slate-50 sticky mt-2 mx-auto py-[2px] px-3 rounded-lg ">
            Today
          </span>
          <div className="ml-7  ">
            <span className="py-2 px-3 rounded-md bg-slate-50">
              Good morning sir
              <span className="text-slate-400 ml-10">7:45</span>
            </span>
          </div>
          <div className="ml-7 grid gap-3 justify-end mr-5 ">
            <span className="py-2 px-3 rounded-md bg-blue-100">
              Good morning sir
              <span className="text-slate-400 ml-10">7:45</span>
            </span>
          </div>
        </div>

        <footer className="bg-slate-100 flex relative items-center justify-between py-3 px-4">
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
            className="w-[86%] outline-none px-6 py-2 rounded-lg"
            placeholder="Message"
            onChange={(e) => {
              setmessage(e.target.value);
            }}
            value={message}
          />
          {message.length > 0 ? (
            <button className="rounded-full h-8 w-8">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="text-lg text-blue-400"
              />
            </button>
          ) : (
            <button className="rounded-full h-8 w-8">
              <FontAwesomeIcon
                icon={faMicrophone}
                className="text-lg text-blue-400"
              />
            </button>
          )}
        </footer>
      </main>
      {openInfo && (
        <>
          <div className=" translate-x-0 ease-in duration-700 bg-white w-[35rem]">
            <Aside setOpenInfo={setOpenInfo} />
          </div>
        </>
      )}
    </>
  );
};

export default Main;
