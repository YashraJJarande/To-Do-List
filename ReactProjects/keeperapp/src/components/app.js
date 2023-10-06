import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setnotes] = useState([]);
  function addNote(note){
    setnotes(prevNotes => {
      return[...prevNotes,note]
    })
  }

  function deletenote(id){
    	setnotes(prevNotes => {
        return prevNotes.filter((noteItem,index) =>{
          return index !== id;
        }
        )
      })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
     {notes.map((newItem,index) => {
        return <Note 
          key ={index}
          id={index }
          title = {newItem.title}
          content = {newItem.content}
          onDelete = {deletenote}
        />
      })}
      
      <Footer />
    </div>
  );
}

export default App;
