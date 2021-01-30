import React, {createRef, forwardRef, useRef, useState} from "react"
import "./App.css"

function App() {
  return (
    <div>
      <MovableButton text="按住可以移动的按钮"/>
      <MovableDiv text="按住可以移动Div"/>
    </div>
  )
}

//下面的方法传入props，得到有对应props的可以移动的组件。实际的Movable应该传入一个基础组件，然后得到一个接受props参数并且可以移动的组件
// const MovableButton = (props) => Movable(props, (props) => <button {...props}/>)
// const MovableDiv = (props) => Movable(props, (props) => <div {...props}/>)
//进行如下修改
const MovableButton = Movable((props) => <button {...props}/>)
const MovableDiv = Movable((props) => <div {...props}/>)

function Movable(Component) {
  function ComponentWithProps(props) {
    //记录当前鼠标的位置，是button的左上角
    const [pos, setPos] = useState([0, 0])
    //记录点击时，鼠标的位置相对按钮左手角的位置，保证按钮不跳动
    const [dist, setDist] = useState([0, 0])
    //记录鼠标是否按下
    const [press, setPress] = useState(false)
    const onMouseDown = (e) => {
      console.log("down")
      setPress(true)
      setDist([e.clientX - pos[0], e.clientY - pos[1]])
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
      <Component onMouseMove={onMouseMove} onMouseDown={onMouseDown} onMouseUp={onMouseUp}
                 style={{position: "fixed", left: pos[0], top: pos[1]}}>{props.text}</Component>
    )
  }

  return ComponentWithProps
}


export default App
