import Image from "next/image";
import {
  faEllipsisVertical,
  faPenToSquare,
  faSearch,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chat from "./Chat";

const Sidebar = () => {
  const placeholder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-8 -8 40 40' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-image'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21 15 16 10 5 21'%3E%3C/polyline%3E%3C/svg%3E`;
  return (
    <>
      <aside className="h-screen bg-white flex flex-col space-y-2">
        <div className="bg-slate-100 flex  items-center justify-between px-2 py-2 ">
          <Image
            className="cursor-pointer hover:opacity-80 rounded-full "
            src="https://links.papareact.com/gll"
            alt="profile"
            height={40}
            width={40}
          />
          <div>
            <button
              data-tooltip-target="new-message-hover"
              data-tooltip-placement="bottom"
              type="button"
              className="rounded-full bg-inherit mr-2  hover:bg-slate-200 w-10 h-10"
            >
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="text-slate-500 text-xl"
              />
            </button>

            <button className="rounded-full bg-inherit hover:bg-slate-200 w-10 h-10">
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className="text-slate-500 text-xl"
              />
            </button>
          </div>
        </div>

        <div className="relative  px-2 flex items-center">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-slate-500 text-xl inset-y-0 my-auto pl-3 flex absolute"
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
              className="text-slate-500 text-xl  "
            />
          </button>
        </div>
        <div className="divide-y">
          <Chat />
          <Chat />
          <Chat />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
