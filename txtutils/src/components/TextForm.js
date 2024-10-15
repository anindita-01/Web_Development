import React from "react";

export default function TextForm({heading}) {
  return (
    <div>
      
        <div className="form-group">
          <h1>{heading}</h1>
          <textarea
            className="form-control"
            id="myBox1"
            rows="8">
          </textarea>
        </div>

      
    </div>
  );
}
