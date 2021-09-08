import { useSlides } from "../context/slides-context";

const MdWriter = () => {
    const { setMarkdown, markdown } = useSlides();

    function handleChangeTextarea(value: string) {
        setMarkdown(value);
    }

    return (
        <div className="h-1/3">
        <div className="mt-20">
          <h4 className="text-lg font-bold text-white">Markdown</h4>
          <span className=" text-sm font-light text-gray-300">
            Write your markdown based in{" "}
            <a
              className="underline"
              href="https://marpit.marp.app/"
              target="_blank"
            >
              Marpit
            </a>
          </span>
        </div>
        <div className="h-full">
          <textarea
            className="text-grey-darkest flex-1 p-2 m-1 bg-transparent h-full w-80 resize-none focus:outline-none text-white"
            onChange={(e) => handleChangeTextarea(e.target.value)}
          >
            {markdown}
          </textarea>
        </div>
      </div>
    );
}
 
export default MdWriter;