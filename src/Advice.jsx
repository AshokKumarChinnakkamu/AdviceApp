import { useState } from "react"

const Advice = () => {
let [advice,setAdvice]=useState("Please click the button");
async function change(){
    let url=await fetch("https://api.adviceslip.com/advice");
    let data=await url.json();
    setAdvice(data.slip.advice);
}
  return (
    <>
      <h2>{advice}</h2>
      <button onClick={change}>Click for Advice</button>
    </>
  )
}

export default Advice
