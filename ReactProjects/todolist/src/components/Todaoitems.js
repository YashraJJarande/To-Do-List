import React from "react";


function Todaoitems(props){
    // const [through,setThrough] = useState(false);
    
    // function UpdateThrough(){
    //    setThrough(preValue =>
    //     {
    //         return !preValue;
    //     })
    // };
    

    return (
    <div>
        { <li onClick={() =>
        props.onClicked(props.id)} /*style={{textDecoration:through ? "line-through" : "none"}} */>{props.text}</li> }
    </div>)
}

export default Todaoitems;