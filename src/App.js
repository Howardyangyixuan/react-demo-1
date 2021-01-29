import React, {createRef, useRef, useState} from "react"
import "./App.css"

function App() {
  //下面两句作用相同
  const ref = useRef(null)
  // const ref = createRef()
  const onClick = () => {
    ref.current.innerText = "内部组件2：hi"
  }
  const reset = () => {
    ref.current.innerText = "内部组件part2"
  }
  return (
    <div>
      <FancyButton ref={ref}>
        Click me!
      </FancyButton>
      <hr/>
      <button onClick={onClick}>利用ref引用内部组件的组件2,并将其innerText改为"内部组件2:hi"</button>
      <button onClick={reset}>reset</button>
      <div>注意：如果使用函数组件，需要使用forwardRef，因为函数组件没有实例</div>
    </div>
  )
}

function Button(props, ref) {
  console.log(props)
  return (
    <div>
      内部组件
      <p>内部组件part1:一般引用该组件的父组件不能改变该组件内部组件2</p>
      <button ref={ref}>
        内部组件part2
      </button>
    </div>
  )
}

const FancyButton = React.forwardRef(Button)


export default App
