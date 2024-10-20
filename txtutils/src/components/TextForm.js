import React, { useState } from "react";

export default function TextForm({ heading,mode }) {
  const handleUpClick = () => {
    // console.log("Uppercase was click");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    // console.log("Uppercase was click");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
//     props.showAlert("Copied to Clipboard!", "success");
 }

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  // props.showAlert("Extra spaces removed!", "success");
}

  const handleClearClick = () => {
    // console.log("Uppercase was click");
    let newText = "";
    setText(newText);
  };

  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText("new text")
  return (
    <>
      <div className="container" style={{color: mode==='dark'?'white':'#042743'}}>
        <div className="my-3">
          <h1>{heading}</h1>
          <textarea
            className="form-control my-4"
            id="myBox1"
            style={{backgroundColor: mode==='dark'?'#13466e':'white', color: mode==='dark'?'white':'#042743'}}
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLowClick}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>
            Clear text
          </button>
          <button className="btn btn-primary mx-1" onClick={handleCapitalize}>
            Capitalize text
          </button>
          <button
            // disabled={text.length === 0}
            className="btn btn-primary mx-2"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            // disabled={text.length === 0}
            className="btn btn-primary mx-2 "
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>

      <div className="container my-3" style={{color: mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  );
}
