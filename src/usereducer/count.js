import { useReducer, useEffect } from "react";
const countReducer = (count, action) => {
  switch (action.type) {
    case "IN": {
      return count + action.by;
    }
    case "DEC": {
      return count - action.by;
    }
    case "RES": {
      return 0;
    }
    default: {
      return count;
    }
  }
};

function Count() {
  const [count, dispatch] = useReducer(countReducer, 10);
  const In = () => dispatch({ type: "IN", by: 10 }); //dispatch("IN")
  const Dec = () => dispatch({ type: "DEC", by: 5 }); //dispatch("DEC")
  const Res = () => dispatch({ type: "RES" }); //dispatch("RES")
  //componentDidMount
  useEffect(() => {
    console.log("first Render");
    return () => {
      //Component WillUnMount
      console.log("Component willMount");
    };
  }, []);
  //componentDidUpdate
  useEffect(() => {
    console.log("updated successfully");
  });
  //componentDidUpdate-Count
  useEffect(() => {
    console.log("count Update");
  }, [count]);
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={In}>INCREMENT</button>
      <button onClick={Dec}>DECREMENT</button>
      <button onClick={Res}>RESET</button>
    </div>
  );
}
export default Count;
