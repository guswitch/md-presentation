import axios from 'axios';
import {readJSON} from 'fs-extra'
import { useState, CSSProperties, useEffect } from "react";
import TextInput from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';




const CssWriter = () => {

    const [CSSProperties,SetCSSProperties] = useState([""])

  useEffect(() => {
      function LoadCSSProperties(){
       axios.get(`${process.env.API_URL}/all-css-properties`)
       .then(data => console.log(data))
       .catch(err => console.error(err))
      }
      LoadCSSProperties()
    },[])

  function handleChangeCssTextarea(value: string) {
    console.log(value);
    // setCss();
  }

  return (
    <div className="h-1/2 mt-20">
      <div className="flex justify-between">
        <div>
          <h4 className="text-lg font-bold text-white">CSS</h4>
          <span className="text-sm font-light text-gray-300">
            Write your classes here
          </span>
        </div>
        <button className="text-lg bg-blue-500 text-white rounded-md h-10 w-10">
          +
        </button>
      </div>
      <div className="h-full">
        
        <TextInput trigger={["@", "@@"]} options={["text-align","color","border"]} />
      </div>
    </div>
  );
};

export default CssWriter;
