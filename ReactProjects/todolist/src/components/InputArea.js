import React , {useState}from "react";

function InputArea(props){

const [text,settext] = useState("");

function updatetext(event){
    const value = event.target.value;

    settext(value);       
 }

    return (
        <div className="form">
      
        <input onChange = {updatetext} type="text" value={text}/>
        <button onClick={() => {
        props.onAdd(text)
          settext("") }} >
          <span>Add</span>
        </button>
        
      </div>
    );
}

export default InputArea;