import { Transition } from "@windmill/react-ui";
import { useSlides } from "../context/slides-context";
import CssWriter from "./css-writer";
import MdWriter from "./md-writer";

export default function MarkdownViewer() {
  const { setMarkdown, markdown, css, setCss, isSourceOpened } = useSlides();

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
      <div className="fixed shadow-lg bg-gray-800 h-screen w-z-40 inset-y-0 right-0 px-4">
        <MdWriter />
        <CssWriter />
      </div>
    </Transition>
  );
}
