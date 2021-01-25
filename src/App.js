import React, {useReducer, useRef} from "react"
import "./App.css"

//1.初始化
const initData = {
  n:0
}

//2.提供操作
function reducer(state, action) {
  if (action.type === "add"){
    return {n:state.n+1}
  } else if (action.type === "double") {
    console.log("2")
    console.log(state)
    return {n:state.n*2}
  } else {
    throw new Error("unknown type")
  }
}

function App() {
  const [n,setN] = useReducer(reducer,initData)
  return (
    <div>
      <p>
        n:{n.n}
      </p>
      <button onClick={()=>{setN({type:"double"})}}>*2</button>
      <button onClick={()=>{setN({type:"add"})}}>+1</button>
    </div>

  )
}


export default App
