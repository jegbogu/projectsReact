 import { useState } from "react";
 const Genrandomcolor = () => {
    const[fnum,setfnumfnc] = useState(255)
    const[snum,setsnumfnc] = useState(200)
    const[tnum,settnumfnc] = useState(10)
    const genNum =()=>{
        setfnumfnc(Math.floor(Math.random()*255)+1)
        setsnumfnc(Math.floor(Math.random()*255)+1)
        settnumfnc(Math.floor(Math.random()*255)+1)
    }
    
    return (  
        <div className="randomColor">
            <h1>rgb({fnum},{snum},{tnum})</h1>
            <div className="colorDispaly display" style={{backgroundColor:`rgb(${fnum},${snum},${tnum})`}} >

            </div>
            <button onClick={genNum}>Genarate Random Color</button>
        </div>
    );
 }
  
 export default Genrandomcolor;