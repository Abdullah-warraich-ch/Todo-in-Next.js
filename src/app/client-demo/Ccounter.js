"use client";
import React, { useState } from "react";

function Ccounter() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}

export default Ccounter;
