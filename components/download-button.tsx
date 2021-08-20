import { ArrowDownIcon } from "@heroicons/react/solid";
import { Transition } from "@windmill/react-ui";
import { useState } from "react";
import { useSlides } from "../context/slides-context";

export const DownloadButton = () => {
  const [isDropdownOpened, setIsDropdwownOpened] = useState(false);
  const { setSaveAs, getConvertedFile } = useSlides();
  return (
    <div className="relative inline-block text-center">
      <div>
        <button
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700"
          onClick={() => setIsDropdwownOpened(!isDropdownOpened)}
        >
          Download &nbsp;
          <ArrowDownIcon width="15" height="15" />
        </button>
      </div>

      <Transition
        show={isDropdownOpened}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          {/* <select
          className="w-full bg-indigo-900 text-white" 
          onChange={(e) => setSaveAs(e.target.value)}
          >
            <option value="pdf">PDF</option>
            <option value="pptx">PPTX</option>
          </select> */}
          <div className="border-2 border-indigo-600 text-center cursor-pointer">
            <input
              className="opacity-0 absolute inset-x-0 w-full h-10 input-radio"
              type="radio"
              name="saveAs"
              id="asPDF"
              onClick={(e) => setSaveAs("pdf")}
              defaultChecked={true}
            />
            <label className="h-10 radio-box" htmlFor="asPDF">
              PDF
            </label>
          </div>
          <div className="border-2 border-indigo-600 text-center cursor-pointer">
            <input
              className="opacity-0 absolute inset-x-0 w-full h-10 input-radio"
              type="radio"
              name="saveAs"
              id="asPPTX"
              onClick={(e) => setSaveAs("pptx")}
              defaultChecked={true}
            />
            <label className="h-10 radio-box" htmlFor="asPPTX">
              PPTX
            </label>
          </div>
          <button
            onClick={() => getConvertedFile()}
            className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
          >
            Download
          </button>
        </div>
      </Transition>
    </div>
  );
};
