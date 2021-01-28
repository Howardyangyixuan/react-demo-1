import React, {useEffect, useState} from "react"
import "./App.css"

function App() {
  const [n, setN] = useState(0)
  const [m, setM] = useState(0)
  useEffect(() => {
    console.log("第一次渲染")
  }, [])
  useEffect(() => {
    console.log(`n第${n}次渲染`)
  }, [n])
  useEffect(() => {
    console.log("每一次改变或渲染")
  })

  return (
    <div>
      m:{m}
      <button onClick={() => setM(m + 1)}>+1</button>
      n:{n}
      <button onClick={() => setN(n + 1)}>+1</button>
      {m % 2 ? <Child/> : null}
    </div>
  )
}

function Child() {
  useEffect(() => {
    return () => console.log("子组件即将移出")
  })
  return (
    <div>
      child
    </div>
  )

}

export default App
