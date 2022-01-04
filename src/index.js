import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
function Test() {
  const [show, setShow] = React.useState(true);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          background: "green",
          flexDirection: "column",
        }}
      >
        <button
          style={{ height: "50px", width: "100px", marginLeft: "50%" }}
          onClick={() => setShow(!show)}
        >
          Show/Hide
        </button>
        {show ? <App /> : <></>}
      </div>
    </>
  );
}
ReactDOM.render(<Test />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
