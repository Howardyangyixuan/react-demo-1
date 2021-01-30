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
    //记录移动时鼠标的位置，根据当前位置 = 原位置+当前鼠标位置-上一时刻鼠标位置
    const [pos, setPos] = useState([0, 0])
    //用useRef在组件中共享变量，而不是重新生成，替代按下press和相对位置dist，同时由于current不自动更新，因此需要改变pos从而使其更新，所以变量的含义发生变化
    //记录点击时，鼠标的位置，保证按钮不跳动
    const ref = useRef(null)
    const onMouseDown = (e) => {
      console.log("down")
      console.log(ref.current)
      ref.current = [e.clientX, e.clientY]
    }
    const onMouseMove = (e) => {
      if (ref.current) {
        setPos([pos[0] + e.clientX - ref.current[0], pos[1] + e.clientY - ref.current[1]])
        ref.current = [e.clientX, e.clientY]
      }
    }
    const onMouseUp = () => {
      ref.current = null
      console.log("up")
    }

    return (
      <Component onMouseMove={onMouseMove} onMouseDown={onMouseDown} onMouseUp={onMouseUp}
                 style={{
                   position: "fixed",
                   left: pos && pos[0],
                   top: pos && pos[1]
                 }}>{props.text}</Component>
    )
  }

  return ComponentWithProps
}


export default App
