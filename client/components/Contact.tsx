import React, { useState } from "react";
import Image from "next/image";

const Contact = ({ setChecked, checked, openGroupModal }: any) => {
  const check = checked;
  const handleChange = () => {
    if (openGroupModal) {
      setChecked(!check);
    }
  };
  return (
    <>
      <div className="flex items-center justify-start bg-white hover:bg-slate-50 hover:cursor-pointer  px-2 py-4">
        <div className="flex">
          <Image
            className="cursor-pointer hover:opacity-60 opacity-80   rounded-full "
            src="/aris.png"
            alt="profile"
            height={50}
            width={50}
          />
        </div>
        <div className="flex ml-4 flex-1 justify-between">
          <div className="space-y-1 ">
            <h2 className="font-semibold  text-sm">Ngoran Aristide</h2>
            <h4 className="text-slate-500 text-xs">ngoran@gmail.com</h4>
          </div>
          <div className="text-right space-y-2">
            <input
              type="checkbox"
              name="useremail"
              onChange={() => {
                handleChange();
              }}
              //   value={checked}
              checked={check}
              id="useremail"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
