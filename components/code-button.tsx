import { CodeIcon } from "@heroicons/react/solid";
import { useSlides } from "../context/slides-context";

export const CodeButton = () => {
  const { setIsSourceOpened, isSourceOpened } = useSlides();
  return (
    <div className="relative inline-block text-center mr-2">
      <button
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700"
        onClick={() => setIsSourceOpened(!isSourceOpened)}
      >
        Markdown &nbsp;
        <CodeIcon width="20" height="20" />
      </button>
    </div>
  );
};
