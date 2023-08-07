import React,{useState} from 'react'

export default function TextForm(props) {
  
    const handleUpClick=()=>{
       // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.ShowAlert("Converted to uppercase","success");
    }
    const handleLowClick=()=>{
      // console.log("Uppercase was clicked"+text);
       let newText=text.toLowerCase();
       setText(newText)
       props.ShowAlert("Converted to lowercase","success");
   }
   const handleClearClick=()=>{
    // console.log("Uppercase was clicked"+text);
     let newText="";
     setText(newText)
     props.ShowAlert("Text is cleared","success");
 }
  const handleCopy=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.ShowAlert("Text is copied","success");
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.ShowAlert("Extra spaces are removed","success");
  }
    
    const handleOnChange=(event)=>{
       // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //setText("juhffg");    //updates the value of state text  
  return (
    <>
    <div className='container' style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
  <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button disabled={text.length==0} className="btn btn-primary mx-3 my-1"  onClick={handleUpClick}>Convert To Uppercase</button>
<button disabled={text.length==0} className="btn btn-primary mx-3 my-1" onClick={handleLowClick}>Convert To Lowercase</button>
<button disabled={text.length==0} className="btn btn-primary mx-3 my-1" onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length==0} className="btn btn-primary mx-3 my-1" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length==0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3"style={{backgroundColor:props.mode==='light'?'white':'black' ,color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{ text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview "}</p>
    </div>
    </>
  )
}
