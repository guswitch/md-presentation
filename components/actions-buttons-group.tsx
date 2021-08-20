import { CodeIcon,SaveAsIcon } from "@heroicons/react/solid";
import { useSlides } from "../context/slides-context";
import { CodeButton } from "./code-button";
import { DownloadButton } from "./download-button";

export default function ActionsButtonsGroup(){

    const {setIsSourceOpened, isSourceOpened, getConvertedFile} = useSlides()

    function handleCodeButton(){
        setIsSourceOpened(!isSourceOpened)
    }

    return (
        <div className="fixed inset-x-0 top-0 bg-indigo-500 flex flex-row-reverse m-auto p-2">
            <DownloadButton />
            <CodeButton />
        </div>
    )
}