import React from 'react'

export default function About(props) {
    const myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#13466e' : 'white'
    }

    const borderStyle = {
        border: props.mode === 'dark' ? '1px solid white' : '1px solid #042743'
    }

    return (
        <div className='container my-3' style={myStyle}>
            <h2 className='my-3'>About Us</h2>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={{ ...myStyle, ...borderStyle }}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            style={myStyle}
                        >
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            TextUtils helps users quickly analyze their text in a simple and efficient way. 
                            You can count words and characters instantly, which is useful for writing essays, 
                            assignments, posts, or any content where length matters.
                        </div>
                    </div>
                </div>

                <div className="accordion-item" style={{ ...myStyle, ...borderStyle }}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            style={myStyle}
                        >
                            <strong>Free Text Utilities</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            This project provides useful text transformation features such as converting text 
                            to uppercase, converting text to lowercase, and clearing unwanted content. It saves 
                            time and makes basic text editing much easier for users.
                        </div>
                    </div>
                </div>

                <div className="accordion-item" style={{ ...myStyle, ...borderStyle }}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            style={myStyle}
                        >
                            <strong>Browser Compatible and User Friendly</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is designed to work smoothly in the browser with a clean and user-friendly 
                            interface. It also supports dark mode, making the experience better and more comfortable 
                            for users in different viewing preferences.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}