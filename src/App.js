import React, {memo, useCallback, useMemo, useState} from "react"
import "./App.css"

function App() {
  const [n, setN] = useState(0)
  const [m, setM] = useState(0)
  const [r, setR] = useState(0)
  const onClick = () => {
    setN(n + 1)
  }
  const onClickMemo = useCallback(
    () => {
      setN(n + 1)
    }
    , [n])
  //如果deps里不写n那么效果将是静态的，即n始终为1
  const onClickMemoNoDeps = useMemo(() => {
    return () => {
      setN(n + 1)
    }
  }, [])


  return (
    <div>
      n:{n}
      <button onClick={() => {
        setN(n + 1)
      }}>n+1
      </button>
      m:{m}
      <button onClick={() => {
        setM(m + 1)
      }}>m+1
      </button>
      r:{r}
      <button onClick={() => {
        setR(r + 1)
      }}>r+1
      </button>
      <hr/>
      memoChild:
      <MemoChild name={"1.memoChild"} data={m} onClick={onClick}/>
      useMemoNoDepsChild:
      <MemoChild name={"2.useMemoNoDepsChild"} data={m} onClick={onClickMemoNoDeps}/>
      useMemoChild:
      <MemoChild name={"3.useMemoChild"} data={m} onClick={onClickMemo}/>
    </div>
  )
}

const MemoChild = memo(Child)

function Child(props) {
  console.log(`${props.name} render`)
  return (
    <div>
      m:{props.data}
      <button onClick={props.onClick}>
        n+1
      </button>
    </div>
  )
}

export default App
