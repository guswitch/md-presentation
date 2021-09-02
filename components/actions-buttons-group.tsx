import { CodeIcon,SaveAsIcon } from "@heroicons/react/solid";
import { useSlides } from "../context/slides-context";
import { CodeButton } from "./code-button";
import { DownloadButton } from "./download-button";
import Image from "next/image";
import MarpitLogo from "../public/marpit.png";

export default function ActionsButtonsGroup(){

    const {setIsSourceOpened, isSourceOpened, getConvertedFile} = useSlides()

    function handleCodeButton(){
        setIsSourceOpened(!isSourceOpened)
    }

    return (
        <nav className="fixed inset-x-0 top-0 bg-white flex justify-between items-center m-auto px-2 py-4 shadow-md">
            <div className="flex items-center rounded-lg">
            <Image src={MarpitLogo} height="40" width="150" />
            <span className="text-black text-xl underline logo-text">
                Playground 🎮️
            </span>
            </div>
            <div>
            <DownloadButton />
            <CodeButton />
            </div>
        </nav>
    )
}