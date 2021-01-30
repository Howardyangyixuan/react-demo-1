import React, {createRef, forwardRef, useRef, useState} from "react"
import "./App.css"

function App() {
  return (
    <div>
      <MovableButton text="按住可以移动的按钮"/>
    </div>
  )
}

function MovableButton(props) {
  //记录当前鼠标的位置，是button的左上角
  const [pos, setPos] = useState([0, 0])
  //记录点击时，鼠标的位置相对按钮左手角的位置，保证按钮不跳动
  const [dist, setDist] = useState([0, 0])
  //记录鼠标是否按下
  const [press, setPress] = useState(false)
  const onMouseDown = (e) => {
    console.log("down")
    setPress(true)
    setDist([e.clientX-pos[0], e.clientY-pos[1]])
  }
  const onMouseMove = (e) => {
    if (press) {
      setPos([e.clientX - dist[0], e.clientY - dist[1]])
    }
  }
  const onMouseUp = () => {
    console.log("up")
    setPress(false)
  }
  return (
      <button onMouseMove={onMouseMove} onMouseDown={onMouseDown} onMouseUp={onMouseUp} style={{position:"fixed",left: pos[0], top: pos[1]}}>{props.text}</button>
  )
}


export default App
