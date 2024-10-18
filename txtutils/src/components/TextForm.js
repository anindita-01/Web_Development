import React,{useState} from "react";

export default function TextForm({heading}) {
const handleUpClick =()=>{
  // console.log("Uppercase was click");
  let newText= text.toUpperCase();
  setText(newText)
}

const handleLowClick =()=>{
  // console.log("Uppercase was click");
  let newText= text.toLowerCase();
  setText(newText)
}

const handleOnChange =(event)=>{
  // console.log("On change");
  setText(event.target.value)
}

  const[text, setText]= useState("");
  // setText("new text")
  return (
    <>
    <div className="container">
      
        <div className="my-3">
          <h1>{heading}</h1>
          <textarea
            className="form-control my-4"
            id="myBox1"
            value={text}
            onChange={handleOnChange}
            rows="8">
          </textarea>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
        </div>
    </div>

    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.08*text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
