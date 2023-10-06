import React, { useState } from "react";

function CreateArea(props) {

  const [note,setnote] = useState({
    title:"",
    content:""
  });

function handleChange(event){
  const {name,value} = event.target;

    setnote(prevNote => {
      return { 
        ...prevNote,
      [name] : value};
    })

  }

  function handleSubmit(event){
    props.onAdd(note);
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
        <textarea name="content" value={note.content0} onChange={handleChange} placeholder="Take a note..." rows="3" />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
