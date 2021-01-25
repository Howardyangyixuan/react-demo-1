import React, {useState, useRef} from "react"
import ReactDOM from "react-dom"
import "./App.css"

const rootElement = document.getElementById("root")
const themeContext = React.createContext(null)


function App() {
  const [user, setUser] = React.useState(()=>({name: "howard", age: 9+9}))//注意返回对象要外面套一层括号，这是js的bug，函数的方式只执行一次
  const change = () => {
    setUser(n=>{
      const m = {...n}
      m.age+=1
      console.log(m)
      return m
    })
    setUser(n=>{
      const m = {...n}
      m.age+=1
      console.log(m)
      return m
    })
  }
  return (
    <div>
      <p>user: </p>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <button onClick={() => {
        change()
      }}>
        grow
      </button>
    </div>
  )
}


export default App
