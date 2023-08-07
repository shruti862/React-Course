import React, { useState } from 'react'

export default function About(props) {
   /* const[myStyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'white'
    })*/
    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'black':'white',
      
    };
   /* const[btnText,setBtnText]=useState("Enable Dark Mode")
       const toggleStyle=()=>{
        if(myStyle.color==='white'){
           setMyStyle({ color:'black',
            backgroundColor:'white'})
            setBtnText("Enable Dark mode");
        }
        else{
            setMyStyle({
            color:'white',
            backgroundColor:'black',
           border:'1px solid white'
        })

            setBtnText("Enable Light mode");
        }
         }*/
  return (
    <div classNameName='container my-3 ' style={myStyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
     <div className="accordion-item">
     <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analayze your text</strong> 
      </button>
     </h2>
     <div id="collapseOne" className="accordion-collapse collapse show"  style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count ,character count and many more.
      </div>
      </div>
     </div>
      <div className="accordion-item">
      <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use</strong> 
      </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Textutils is a free character counter tool that provides instant character count & word count statistics for a given text.Textutils reports the number of words and characters.Thus it is suitable for weiting text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse"  style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
         This word counter software works in any web browser such as Chrome,Safari,Firefox,Internet Explorer, Opera.
        It suits to count characters in facebook,blog,boks,excel document,pdf document,essays,etc.
      </div>
    </div>
  </div>
</div>
 {/*<div className="container my-3">
    <button type="button" onClick={toggleStyle} className="btn btn-primary ">{btnText}</button>
  </div>*/}
      
    </div>

  )
}
