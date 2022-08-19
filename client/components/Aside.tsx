import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Aside = ({ setOpenInfo }: any) => {
  return (
    <>
      <div className="space-y-10">
        <header className="flex items-baseline justify-between py-3 bg-slate-100 px-4">
          <span className="font-extrabold ">Contact Info</span>
          <button onClick={() => setOpenInfo(false)}>
            <FontAwesomeIcon
              icon={faTimes}
              className="text-3xl text-blue-500"
            />
          </button>
        </header>
        <div className="flex items-center flex-col">
          <Image
            className="cursor-pointer hover:opacity-60 opacity-80  rounded-full "
            src="/aris.png"
            alt="profile"
            height={100}
            width={100}
          />
          <span className=" text-lg ">Ngorana@gmail.com</span>
        </div>
      </div>
    </>
  );
};

export default Aside;
