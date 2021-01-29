import React, {useEffect, useLayoutEffect, useReducer, useRef, useState} from "react"
import "./App.css"

function App() {
  const [n, setN] = useState(0)
  const time = useRef(null)
  useEffect(() => {
    const layout = document.querySelector("#layout")
    layout.innerText = "n :1000"
    console.log("第一次渲染")
    if (time.current) {
      console.log(`距离点击${performance.now() - time.current}ms`)
    }
  }, [n])
  useLayoutEffect(() => {
    if (time.current) {
      console.log(`Layout距离点击${performance.now() - time.current}ms`)
    }
  }, [n])

  return (
    <div>
      <div id="layout">n:????????????</div>
      <button onClick={() => {
        setN(n + 1)
        time.current = performance.now()
      }}>+1
      </button>
      {console.log("hi")}
    </div>
  )
}

export default App
