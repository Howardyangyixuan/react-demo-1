import React, {useState, useRef} from "react"
import ReactDOM from "react-dom"
import "./App.css"

const rootElement = document.getElementById("root")
const themeContext = React.createContext(null)


function App() {
  const [user, setUser] = React.useState(0)//注意返回对象要外面套一层括号，这是js的bug，函数的方式只执行一次
  return (
    <div>
      <p>user: </p>
      <p>{user}</p>
      <button onClick={() => {
        // setUser(user+1)
        // setUser(user+1)
        setUser(user=>user+1)
        setUser(user=>user+1)
      }}>
        grow
      </button>
    </div>
  )
}


export default App
