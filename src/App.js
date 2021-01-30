import React, {useEffect, useRef} from "react"
import "./App.css"
import useList from "./hooks/useList"

function App() {
  console.log("App加载了")
  const {user, setUser} = useList()
  return (
    <div>
      <h1>我的好友列表</h1>
      <hr/>
      {
        user ? (
          <ol>
            {user.map(item => <li key={item.id}>{item.name}</li>)}
          </ol>
        ) : ("加载中...")
      }
    </div>
  )
}


export default App
