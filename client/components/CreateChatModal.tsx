import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Contact from "./Contact";
import Chat from "./Chat";
import ChatContact from "./ChatContact";

const CreateChatModal = ({ setShowModal, showModal }: any) => {
  return (
    <>
      <div
        className={`bg-slate-100 w-96 flex  h-screen fixed  justify-between `}
      >
        <div className="bg-white h-full w-full flex flex-col">
          <div className=" sticky top-0 bg-blue-400 text-xl font-extrabold text-slate-50 h-7 py-14 px-5">
            <button
              className="rounded-full mr-10 "
              onClick={() => setShowModal(false)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <span>New Chat</span>
          </div>

          <div className="mt-5 px-3 flex items-center ">
            <span className="absolute px-2 text-slate-500 ">
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            <input
              type="email"
              className=" w-full outline-none bg-slate-100 py-1 pl-16"
              placeholder="Search Email"
            />
          </div>
          <div className="mt-5 px-2">
            <ChatContact />
            <ChatContact />
            <ChatContact />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateChatModal;
