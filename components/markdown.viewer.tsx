import { Transition } from "@windmill/react-ui";
import { useSlides } from "../context/slides-context";

export default function MarkdownViewer() {
  const { setMarkdown, markdown, isSourceOpened } = useSlides();

  function handleChangeTextarea(value: string) {
    setMarkdown(value);
  }

  return (
    <Transition
      show={isSourceOpened}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={`fixed shadow-lg bg-gray-800 h-100 w-z-40 inset-y-0 right-0 px-4`}
      >
        <div className="mt-20">
          <h3 className="text-lg font-bold text-white">Markdown</h3>
          <span className=" text-md font-light text-gray-300">
            Write your markdown based in <a className="underline" href="https://marpit.marp.app/" target="_blank">Marpit</a>
          </span>
        </div>
        <div>
          <textarea
            className="text-grey-darkest flex-1 p-2 m-1 bg-transparent h-100 w-80 resize-none focus:outline-none text-white"
            onChange={(e) => handleChangeTextarea(e.target.value)}
          >
            {markdown}
          </textarea>
        </div>
      </div>
    </Transition>
  );
}
