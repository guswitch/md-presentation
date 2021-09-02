import { ArrowDownIcon, SaveAsIcon } from "@heroicons/react/solid";
import { Transition } from "@windmill/react-ui";
import { useState } from "react";
import { useSlides } from "../context/slides-context";
import LoadingComponent from "./loading-component";

export const DownloadButton = () => {
  const [isDropdownOpened, setIsDropdwownOpened] = useState(false);
  const [loadingDownload, setLoadingDownload] = useState(false)
  const { saveAs, setSaveAs, getConvertedFile } = useSlides();
  return (
    <div className="relative inline-block text-center">
      <div>
        <button
          className="inline-flex justify-center w-full rounded-md border border-gray-400 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700"
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
          className={`
          origin-top-right absolute right-0 mt-1 p-2 w-56 rounded-md shadow-2xl bg-white 
          border border-blue-400 
          ring-1 ring-black ring-opacity-5 focus:outline-none text-left`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <label className="text-blue-600">Select file type:</label>
          <select
          className="mb-2 w-full text-blue-600 rounded-md border border-blue-600 p-2" 
          onChange={(e) => setSaveAs(e.target.value)}
          >
            <option value="pdf">PDF</option>
            <option value="pptx">PPTX</option>
          </select>
          <button
            onClick={() => {
              setLoadingDownload(true);
              getConvertedFile()
              .then(() => setLoadingDownload(false))
              .catch(() => setLoadingDownload(false))
            }}
            className="bg-blue-600 justify-center inline-flex rounded-md text-white block w-full text-left px-4 py-2 text-sm mt-2"
          >
           {loadingDownload ? 
           (
             <>
             <svg
             className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             color="#fff"
           >
             <circle
               className="opacity-25"
               cx="12"
               cy="12"
               r="10"
               stroke="currentColor"
               stroke-width="4"
               color="#fff"
             ></circle>
             <path
               className="opacity-75"
               color="#fff"
               fill="currentColor"
               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
             ></path>
           </svg>
           <span>&nbsp;Generating file...</span>
           </>
           )
            : (
             <>
             <SaveAsIcon width="20" height="20" />
             &nbsp;Download
             </>
           )}
          </button>
        </div>
      </Transition>
    </div>
  );
};
