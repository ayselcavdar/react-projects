import { useState } from "react";

import { send } from "../socketApi";

function Palette() {
  const [color, setColor] = useState("");
  return (
    <div className="palette">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={()=> send(color)}>Click</button>
      {color}
    </div>
  );
}

export default Palette;
