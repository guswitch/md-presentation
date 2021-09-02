import { SaveAsOptions } from './../types/saveas-options';

export interface ISlidesContext {
    markdown: string;
    blob: Blob;
    
    getConvertedFile(): Promise<void>;
  
    setMarkdown: React.Dispatch<React.SetStateAction<string>>;
    isSlideLoaded: boolean;
  
    setSlideSelected: React.Dispatch<React.SetStateAction<number>>;
    slideSelected: number;

    setSaveAs: React.Dispatch<React.SetStateAction<string>>;
    saveAs: SaveAsOptions;
  
    setIsSlideLoaded: React.Dispatch<React.SetStateAction<boolean>>;
    isSourceOpened: boolean;
  
    setIsSourceOpened: React.Dispatch<React.SetStateAction<boolean>>;
  }