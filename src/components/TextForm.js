import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text here"); // array destructuring
    const handleUpClick = () => {
        console.log("Uppercase is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercases", "success")
    }
       const handleLoClick = () => {
        // console.log("Uppercase is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")

    }
        const handleClearClick = () => {
         let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success")

    }

    const handleOnChange = (evt) => {
        // console.log("this is an onchange event")
        setText(evt.target.value);
    }

  return (
<>
    <div className='container'>
        <h1>{props.heading}</h1>
      <div className="mb-3 my-4">
         <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="12"></textarea>
        </div>
        <button className="btn btn-primary me-2" onClick={handleUpClick}>Convert To Upercase</button>
        <button className="btn btn-primary me-2" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container">
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Text to preview"}</p>
    </div>
</>
  )
}
