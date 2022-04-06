import React, { useState, useEffect } from "react";

const UseEffectExample = () => {
  const [button, setButton] = useState("");

  //useEffect hook
  useEffect(() => {
    console.log("useEffect has been called!", button);
  });

  const onYesPress = () => {
    setButton("Yes");
  };

  const onNoPress = () => {
    setButton("No");
  };

return (
      <div>
        <button onClick={() => this.onYesPress()}>Yes</button>
        <button onClick={() => this.onNoPress()}>No</button>
      </div>
    );
};

export default UseEffectExample;