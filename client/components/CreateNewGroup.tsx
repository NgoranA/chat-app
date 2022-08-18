import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Contact from "./Contact";

const CreateNewGroup = ({ setOpenGroupModal, openGroupModal }: any) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div
        className={`bg-slate-100 w-96 flex overflow-y-auto  h-screen fixed  justify-between `}
      >
        <div className="bg-white h-full  w-full flex flex-col">
          <div className="sticky z-50 top-0 bg-blue-400 text-xl font-extrabold text-slate-50 h-7 py-14 px-5">
            <button
              className="rounded-full mr-10 "
              onClick={() => setOpenGroupModal(false)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <span>New Group</span>
          </div>

          <div className="mt-5 px-3 flex items-center ">
            <span className="absolute px-2 text-slate-500 ">
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            <input
              type="email"
              className=" w-full outline-none bg-slate-100 py-1 pl-16"
              placeholder="Search Emails"
            />
          </div>
          <div className="mt-5 px-2 divide-y">
            <Contact
              setChecked={setChecked}
              checked={checked}
              openGroupModal={openGroupModal}
            />
            <Contact
              setChecked={setChecked}
              checked={checked}
              openGroupModal={openGroupModal}
            />
            <Contact
              setChecked={setChecked}
              checked={checked}
              openGroupModal={openGroupModal}
            />
            <Contact
              setChecked={setChecked}
              checked={checked}
              openGroupModal={openGroupModal}
            />
            <Contact
              setChecked={setChecked}
              checked={checked}
              openGroupModal={openGroupModal}
            />
            <Contact
              setChecked={setChecked}
              checked={checked}
              openGroupModal={openGroupModal}
            />
            <Contact
              setChecked={setChecked}
              checked={checked}
              openGroupModal={openGroupModal}
            />
          </div>
          {/* <footer className="fixed"> */}
          {checked && (
            <div className="flex items-center  justify-end px-5 pb-20 ">
              <button className=" text-center animate-bounce h-12 w-12 rounded-full text-slate-50 bg-blue-400">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          )}
          {/* </footer> */}
        </div>
      </div>
    </>
  );
};

export default CreateNewGroup;
