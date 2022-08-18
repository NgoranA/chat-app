import { useState } from "react";
import Image from "next/image";
import {
  faPenToSquare,
  faUserGroup,
  faSignOut,
  faSearch,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chat from "./Chat";
import CreateChatModal from "./CreateChatModal";
import CreateNewGroup from "./CreateNewGroup";

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [openGroupModal, setOpenGroupModal] = useState(false);

  return (
    <div>
      <aside className="h-screen w-96 bg-white ">
        {showModal ? (
          <div className="-translate-x-0 bg-slate-100 w-96 flex  h-screen fixed items-center justify-between z-50 ease-in-out  duration-500">
            <CreateChatModal
              setShowModal={setShowModal}
              showModal={showModal}
            />
          </div>
        ) : (
          <div className="-translate-x-full bg-slate-100 w-96 flex  h-screen fixed items-center justify-between z-50 ease-in-out duration-500 ">
            <CreateChatModal
              setShowModal={setShowModal}
              showModal={showModal}
            />
          </div>
        )}
        {openGroupModal ? (
          <div className="-translate-x-0 bg-slate-100 w-96 flex  h-screen fixed items-center justify-between z-50 ease-in-out  duration-500">
            <CreateNewGroup
              setOpenGroupModal={setOpenGroupModal}
              openGroupModal={openGroupModal}
            />
          </div>
        ) : (
          <div className="-translate-x-full bg-slate-100 w-96 flex  h-screen fixed items-center justify-between z-50 ease-in-out duration-500 ">
            <CreateNewGroup
              setOpenGroupModal={setOpenGroupModal}
              openGroupModal={openGroupModal}
            />
          </div>
        )}
        <div>
          <div className={`flex flex-col space-y-2 sticky top-0`}>
            <div className="bg-slate-100 flex  items-center justify-between px-2 py-2 ">
              <Image
                className="cursor-pointer hover:opacity-80 rounded-full "
                src="https://links.papareact.com/gll"
                alt="profile"
                height={30}
                width={30}
              />
              <div>
                <button
                  data-tooltip-target="new-message-hover"
                  data-tooltip-placement="bottom"
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                  type="button"
                  className="rounded-full bg-inherit mr-2  hover:bg-slate-200 w-10 h-10"
                >
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-blue-500 text-lg"
                  />
                </button>

                <button
                  onClick={() => {
                    setOpenGroupModal(!openGroupModal);
                  }}
                  className="rounded-full bg-inherit hover:bg-slate-200 w-10 h-10"
                >
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    className="text-blue-500 text-lg"
                  />
                </button>
                <button className="rounded-full bg-inherit hover:bg-slate-200 w-10 h-10">
                  <FontAwesomeIcon
                    icon={faSignOut}
                    className="text-blue-500 text-lg"
                  />
                </button>
              </div>
            </div>

            <div className="relative  px-2 flex items-center">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-slate-400 text-xl inset-y-0 my-auto pl-3 flex absolute"
              />
              <input
                type="text"
                id="input-group-1"
                className=" flex-1 rounded-lg pl-12 outline-none bg-slate-100 h-8 "
                placeholder="Search in chats"
              />
              <button className="rounded-full hidden md:inline bg-inherit ml-1 hover:bg-slate-100 w-10 h-10">
                <FontAwesomeIcon
                  icon={faFilter}
                  className="text-slate-400 text-xl  "
                />
              </button>
            </div>
          </div>

          <div className="divide-y flex flex-col">
            <Chat />
            <Chat />
            <Chat />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
