import React, { useState } from 'react'

export const MyTextArea = (props) => {
    const [text, setText] = useState("");

    const changingText = (event) => {
        setText(event.target.value);
    }

    const changeUpper = () => {
        // console.log("onclick change" + text)
        let newText = text.toUpperCase();
        // document.getElementById('myTextBox').value = text;
        setText(newText);
        props.showAlert("Texts Changes to UperCase", "success");
    }
    const changeLower = () => {
        let newText = text.toLowerCase();
        // document.getElementById('myTextBox').value = text;
        setText(newText);
        props.showAlert("Texts Changes to LowerCase", "success");
    }

    const clearText = () => {
        setText("");
        props.showAlert("All texts are cleared", "success");
    }

    const removeExtraSpace = () => {
        // console.log("Remove Extra Space");
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Extra Spaces Removed", "success");
    }
    
    const capEachWord = ()=> {
        let newText = text.split(" ");
        for(let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        setText(newText.join(" "));
        props.showAlert("Captialize Each Word", "success");

    }

    return (
        
            <div className="container border my-3 rounded" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#262530', color: props.mode === 'light' ? 'black' : 'white' }}>

                <div className="container my-3">
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" placeholder="Enter your text here" value={text} onChange={changingText} id="myTextBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#05041b', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>

                    </div>
                    <div className="buttons">
                        <button className="btn btn-sm btn-primary mx-2" onClick={changeUpper}>Change to Uppercase</button>
                        <button className="btn btn-sm btn-primary mx-2" onClick={changeLower}>Change to Lowercase</button>
                        <button className="btn btn-sm btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>
                        <button className="btn btn-sm btn-primary mx-2" onClick={capEachWord}>Capitalize Each Word</button>
                        <button className="btn btn-sm btn-primary mx-2" onClick={clearText}>Clear Text</button>

                    </div>
                </div>
                <div className="container my-3">
                    <h2>Text Summary</h2>
                    <p><b>{text === "" ? '0' : text.split(" ").length}</b> words <b>{text.length}</b> characters</p>
                    <p><b>{0.0076 * (text.split(" ").length - 1)}</b> Minutes to read</p>
                    <h2>Preview</h2>
                    <p>{text.length === 0 ? "Enter any text above the TextBox to preview" : text}</p>
                </div>
            </div>
        
    )
}
