import React from 'react'
import { useState } from 'react'



function TextForm (props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
          setText(newText);
          props.showAlert(" converted to uppercase" , "success")
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
          setText(newText);
          props.showAlert(" converted to lowercase" , "success")
    }
    const handleInvClick = ()=> {
        let newText = text.split('').reverse().join('')
          setText(newText);
          props.showAlert(" converted to reverse" , "success")
    }
    const handleClearClick = ()=> {
        let newText = '';
          setText(newText);
          props.showAlert(" clear all" , "success")
    }

    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value)
    }
    const [text , setText] = useState(' ');
    //  setText("New text");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white': '#042743'}}>
        <h1>{props.heading}</h1>
<div class="mb-3"> 
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey': 'white', color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="12" my="3"></textarea>
</div>
<button className= "btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className= "btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
<button className= "btn btn-primary mx-1" onClick={handleClearClick}>clear data</button>
<button className= "btn btn-primary mx-1" onClick={handleInvClick}>reverse</button>
</div>
    
<div class="container my-3"style={{color: props.mode==='dark'?'white': '#042743'}}> 
<h2>Your text summary</h2>
<p> {text.split(" ").length} words and {text.length}characters</p>
<p> {0.008 * text.split(" ").length} Minute read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in  above text to preview it here"}</p>
</div>
    </>
  )
}

export default TextForm