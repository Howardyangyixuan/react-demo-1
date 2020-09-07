import React from "react";
import "./App.css";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {n:1}
  }
  onClick = ()=>{
    this.setState({
      n:this.state.n+1
      }
    )
  }
  render(){
    return (
      <div className="App">
        App
        <B name={this.state.n}/>
        <button onClick={this.onClick}>+1</button>
      </div>
  )
  }


}

class B extends React.Component{
  componentWillReceiveProps(nextProps , nextContext) {
    console.log('变化了')
  }

  render() {
    return  (
      <div>
        {this.props.name}
      </div>
    )
  }
}
export default App;
