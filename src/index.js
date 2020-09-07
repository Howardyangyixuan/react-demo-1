import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';
let n = 0;
let root = document.getElementById("root");
const app = () =>
  React.createElement("div", { className: "red" }, [
    n,
    React.createElement(
      "button",
      {
        onClick: () => {
          n += 1;
          ReactDOM.render([app(), Component()], root);
        },
      },
      "-1"
    ),
  ]);
const Component = () => {
  return <div>{n % 2 === 0 ? <div>n是偶数</div> : <span>n是奇数</span>}</div>;
};
ReactDOM.render(
  // <React.StrictMode>
  [app(), Component()],
  // </React.StrictMode>,
  // <div>hi</div>,
  // <App/>
  root
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
