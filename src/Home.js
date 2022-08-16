import {useState  } from "react";
const Home = () => {
    const[num,setNum] = useState(0,".green")
    

    const addFnc = ()=>{
        setNum(num+1)
    }
    const resetFnc = ()=>{
        setNum(0)
    }
    const subFnc = ()=>{
        setNum(num-1)
    }
    
    return (  
        <div className="application">
          <h1 className={num>0?"green":num<0?"red":null}>{num}</h1>
            <hr />
            <div className="btns">
                <button onClick={addFnc}>Add</button>
                <button onClick={resetFnc}>Reset</button>
                <button onClick={subFnc}>Subtract</button>
            </div>
        </div>
    );
}
 
export default Home;