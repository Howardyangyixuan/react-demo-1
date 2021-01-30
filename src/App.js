import React, {useEffect, useRef} from "react"
import "./App.css"
import useList from "./hooks/useList"

function App() {
  console.log("App加载了")
  const {user, remove, add} = useList()
  const len = user ? user.length : 0
  let data = {id: len, name: "null"}
  const getName = () => {
    data.name = document.getElementsByTagName("input")[0].value
    data.id = len + user.length
    add(data)
  }
  return (
    <div>
      <h1>我的好友列表</h1>
      <hr/>
      {
        user ? (
          <div>
            {user.length ? (
            <div>
              <ol>
                {user.map((item, index) => {
                    return (
                      <li key={item.id}>
                        {item.name}
                        <button onClick={() => {
                          remove(index)
                        }}>x
                        </button>
                      </li>)
                  }
                )}
              </ol>
            </div>
            ): <div>您没有朋友</div>
            }
            <form action=""><input type="text" name="add"/></form>
            <button onClick={getName}>add</button>
          </div>
        ) : ("加载中...")
      }
    </div>
  )
}


export default App
