import { product, sector, phase, pjkp, priority } from "@/constants";

const titles = ["Product", "Sector", "Priority", "Phase", "PJKP"];
const keys = [product, sector, priority, phase, pjkp];

const Checkbox = ({ choice }) => {
  return (
    <div className="flex gap-4 ml-4 items-center">
      <input type="checkbox" name="" id={choice.value} className="scale-125" />
      <label htmlFor={choice.value} className="">
        {choice.label}
      </label>
    </div>
  );
};

const Modal = ({ showModal, onClose }) => {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white h-5/6 w-5/6 sm:w-4/5 sm:max-w-3xl rounded-3xl flex flex-col">
            <div className="flex justify-end py-4 px-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer hover:bg-gray-200 rounded-full p-1"
                viewBox="0 0 512 512"
                height="35px"
                onClick={onClose}
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </div>
            <hr className="h-px w-full bg-gray-200"></hr>
            <div className="h-full overflow-y-auto">
              {keys.map((key, i) => (
                <div className="m-8 mb-14">
                  <h2 className="text-2xl font-semibold mb-6">{titles[i]}</h2>
                  <div className="flex flex-col md:grid gap-y-8 md:grid-cols-2">
                    {key.map((choice) => (
                      <Checkbox choice={choice} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <hr className="h-px w-full bg-gray-200"></hr>
            <div className="flex justify-between py-4 px-6 items-center">
              <h3 className="cursor-pointer underline font-medium hover:bg-gray-200 py-2 px-4 rounded-xl">
                Clear All
              </h3>
              <button className="bg-green-500 hover:bg-green-600  py-2 px-4 text-white font-semibold rounded-xl">
                Show Projects
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
