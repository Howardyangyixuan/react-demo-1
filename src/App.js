import React, {useEffect, useState} from "react"
import "./App.css"

function App() {
  const [n, setN] = useState(0)
  useEffect(() => {
    console.log("第一次渲染")
  }, [])
  useEffect(() => {
    console.log(`第${n}次渲染`)
  }, [n])
  useEffect(() => {
    console.log("每一次改变或渲染")
  })

  return (
    <div>
      n:{n}
      <button onClick={() => setN(n + 1)}>+1</button>
      {n % 2 ? <Child/> : null}
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
