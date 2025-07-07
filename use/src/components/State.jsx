import React from 'react'
import { useState } from 'react'
const State = () => {

     const [num, setNum] = useState(0)
     const incrementCount = ()=>{
        setNum(num=>num+1)
     }

  return (
    <div>
        <h1>My count is {num}</h1>

       {/*<button type='button' onClick={()=>setNum(num=>num+1)}>Clickme</button>*/}
       <button type='button' onClick={incrementCount}>Clickme</button>
       
    </div>
  )
}

export default State