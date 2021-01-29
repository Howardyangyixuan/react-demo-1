import React, {memo, useEffect, useLayoutEffect, useReducer, useRef, useState} from "react"
import "./App.css"

function App() {
  const [n, setN] = useState(0)
  const [m, setM] = useState(0)

  return (
    <div>
      <p>n:{n}</p>
      <button onClick={() => {
        setN(n + 1)
      }}>n+1
      </button>
      <hr/>
      Child:
      <Child data={m}/>
      <button onClick={() => {
        setM(m + 1)
      }}>m+1
      </button>
      <hr/>
      memoChild:
      <MemoChild data={m}/>
      <button onClick={() => {
        setM(m + 1)
      }}>m+1
      </button>
    </div>
  )
}

const MemoChild = memo(Child)
function Child(props) {
  console.log("Child render")
  return (
    <div>
      m:{props.data}
    </div>
  )
}

export default App
