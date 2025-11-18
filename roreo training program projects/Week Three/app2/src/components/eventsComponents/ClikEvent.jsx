import { useState } from "react";

function Short(){
    const [name,setName] =useState(0);
   const shoot=(a,event)=>{
    if(event.type==="click"){
        alert(event.type);

    }

   }
    return (<>
        <button onClick={(event)=>{shoot("goal",event)}}>click to shoot</button>
    </>);
}

export default Short;