import { Marp } from "@marp-team/marp-react";
import { useRef } from "react";

import { useSlides } from "../context/slides-context";
import LoadingComponent from "./loading-component";
import MarkdownViewer from "./markdown.viewer";

export default function SlideCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { markdown, isSlideLoaded } = useSlides();

    function handleScroll(){
      console.log('Scroll Top: ', containerRef.current.scrollTop);
    }

  return (
    <>
      {isSlideLoaded ? (
        <div className="overflow-y-auto mt-20 px-10" ref={containerRef} onScroll={() => handleScroll()} >
          <Marp markdown={markdown} options={{ inlineSVG: true }} />
          <MarkdownViewer />
        </div>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
}
