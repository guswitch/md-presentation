import Image from "next/image";
import logo from "../public/logo.png";
import { SaveIcon } from "@heroicons/react/solid";
import { useSlides } from "../context/slides-context";
import fileDownload from 'js-file-download'
import axios from "axios";
import b64toBlob from 'b64-to-blob';

export default function Navbar() {
  const {getConvertedFile} = useSlides();
  

  
  return (
    <nav className="z-50 bg-gray-700 flex items-center justify-between py-3 px-5">
      <Image src={logo} height="55" width="130" />
      <button className="px-6 py-2 bg-yellow-200 flex rounded-full" onClick={() => getConvertedFile()}>
        <SaveIcon color="#000" width="25" height="25" />
        <span className="font-bold text-black">&nbsp;Salvar</span>
      </button>
    </nav>
  );
}
