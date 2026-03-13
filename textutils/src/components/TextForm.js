import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{text.split(" ").length * 0.008} Minutes to read the text</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
