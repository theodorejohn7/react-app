import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  //occurs during mount time
  useEffect(() => {
    document.title = `You clicked ${count} times1`;
    console.log("inside mount time use effect");
  }, []);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.title = `You clicked ${count} times2`;
    console.log("inside component Did Mount  use effect");
  });

  useEffect(() => {
    console.log("inside component unmounting   use effect");
    return ()=> {
        console.log("Component is unmounting") };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example;
