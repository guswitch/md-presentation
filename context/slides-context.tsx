import axios from "axios";
import b64toBlob from "b64-to-blob";
import fileDownload from "js-file-download";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ISlidesContext } from "../utils/interfaces/slides-interface";
import { SaveAsOptions } from "../utils/types/saveas-options";

const SlidesContext = createContext<ISlidesContext>({} as ISlidesContext);

export const SlidesProvider: React.FC = (props) => {
  const [isSlideLoaded, setIsSlideLoaded] = useState<boolean>();
  const [isSourceOpened, setIsSourceOpened] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<string>("# Hello World");
  const [saveAs, setSaveAs] = useState<SaveAsOptions>("pdf");
  const [slideSelected, setSlideSelected] = useState<number>(1);
  const [blob, setBlob] = useState<Blob>();

  console.log(saveAs)

  useEffect(() => {
    setTimeout(() => {
      setIsSlideLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    function SaveFileInBlob() {
      let fileContent = [markdown];
      setBlob(new Blob(fileContent, { type: "text/md" }));
      console.log("blob: ", blob);
    }
    SaveFileInBlob();
  }, [markdown]);

  function getConvertedFile() {
    const file = new File([blob], "slide.md");
    let API_URL = '';
    return axios
      .post(`${process.env.API_URL}/convert-file`, file, {
        headers: { "Content-Type": "multipart/form-data" },
        params: { saveAs },
      })
      .then((res) => {
        let finalBlob = b64toBlob(res.data.file, "application/pdf");
        if (saveAs === "pdf") fileDownload(finalBlob, "slide.pdf");
        else if (saveAs === "pptx") fileDownload(finalBlob, "slide.pptx");
      })
      .catch((err) => console.error(err));
  }

  return (
    <SlidesContext.Provider
      value={{
        markdown,
        blob,
        getConvertedFile,
        setMarkdown,
        isSlideLoaded,
        setIsSlideLoaded,
        setSaveAs,
        saveAs,
        setSlideSelected,
        slideSelected,
        isSourceOpened,
        setIsSourceOpened,
      }}
    >
      {props.children}
    </SlidesContext.Provider>
  );
};

export const SlidesConsumer = SlidesContext.Consumer;

export function useSlides() {
  const context = useContext(SlidesContext);
  return context;
}
