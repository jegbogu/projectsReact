import { useState } from "react";

const Accordion = () => {
    const[selected, setSelected] = useState(false)
    
    const toggle =(i)=>{
        //if clicked question is already active then close it
        if(selected === i){
         
            return setSelected(null)
        }
        setSelected(i)
    }
    return ( 
        <div className="container">
            {data.map((item,i)=>(
            <div className="item">
                <div className="title" onClick={()=>toggle(i)} key={i}>
                <h2>{item.question}</h2>
                <span>{selected=== i ?'-':'+'}</span>
            </div>
            <div className={selected=== i ? 'content show': 'content'}>{item.answer}</div>
            </div>
               
            ))}
        </div>
     );
}
const data = [
    {
        question: "Question 1",
        answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas labore modi placeat blanditiis! Alias possimus id impedit pariatur. Aut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas labore modi placeat blanditiis! Alias possimus id impedit pariatur. Aut?"
    },
    {

  
    question: "Question 2",
    answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas labore modi placeat blanditiis! Alias possimus id impedit pariatur. Aut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas labore modi placeat blanditiis! Alias possimus id impedit pariatur. Aut?"
},
{

  
    question: "Question 3",
    answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas labore modi placeat blanditiis! Alias possimus id impedit pariatur. Aut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas labore modi placeat blanditiis! Alias possimus id impedit pariatur. Aut?"
},
]
 
export default Accordion;