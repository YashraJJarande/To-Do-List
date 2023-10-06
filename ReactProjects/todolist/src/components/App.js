import React, { useState } from "react";
import Todaoitems from "./Todaoitems";
import InputArea from "./InputArea";

function App() {
const [newitem , setnewitem] = useState([]);
function StoreArray(text){
    setnewitem( preValue => {
        return [ ...preValue,
            text];
    });
   }
function deleteitem(id){ 
    
    setnewitem(Previtem =>
    {
        return Previtem.filter((item,index) => {
           
            return !(index === id)
        }     
        );            
    })
 }
 return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        onAdd = {StoreArray}
      />
      <div>
        <ul>
          { newitem.map( (items,index) => ( 
            <Todaoitems 
            key = {index}
            text = {items} 
            onClicked= {deleteitem}
            id={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );          }
export default App;
