import React, {useReducer, useRef} from "react"
import "./App.css"

//1.初始化
const initFormData = {
  name: "",
  age: 18,
  ethic: "汉族"
}

//2.提供操作
function dispatch(state, action) {
  if (action.type === "update") {
    return {...state, ...action.formData}
  } else if (action.type === "reset") {
    return initFormData
  } else {
    console.log(action)
    throw new Error("unknown type")
  }
}

function App() {
  const [formData, setFormData] = useReducer(dispatch, initFormData)
  const reset = () => {
    setFormData({type:"reset"})
  }
  return (
    <form onSubmit={reset} onReset={reset}>
      <div>
        <label>name
          <input value={formData.name} onChange={e => setFormData({type: "update", formData: {name: e.target.value}})}/></label>
      </div>
      <div>
        <label>age
          <input value={formData.age} onChange={e => setFormData({type: "update", formData: {age: e.target.value}})}/></label>
      </div>
      <div>
        <label>name
          <input value={formData.ethic} onChange={e => setFormData({type: "update", formData: {ethic: e.target.value}})}/></label>
      </div>
      <div>
        <button type="submit">submit</button>
        <button type="reset">reset</button>
      </div>
      <hr/>
      {JSON.stringify(formData)}
    </form>

  )
}


export default App
