import React from 'react'
import { useState, useEffect } from 'react'
const Effect = () => 
{
    const [count, setCount] = useState(0)
    const [cal, setCal] = useState(0)
     useEffect(()=>
        {
           {/* setTimeout(()=>{*/}
               {/* setCount(count=>count+1)*/}
               setCal(()=>count*2)

            },[count])
        

  return (
    <div>
       {/*<h1>I have rendered that {count}</h1>*/}
       <h3>Count : {count}</h3>
       <button type='button' onClick={()=>setCount(count=>count+1)}>Clickme</button>
       <h3>cal : {cal}</h3>
    </div>
  )
}

export default Effect