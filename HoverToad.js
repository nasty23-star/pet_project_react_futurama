
import React, { useState } from "react";
import './Hipno.css'
function HoverToad() {
  const [inHover, setHover] = useState(false);

  return (
    <div className="Hipno">
      <div className="wordstyle"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Все любят Гипножабу!
      </div>
      {inHover && <p className="imgstyle"><img src="/image/hipnotoad.jpg" /></p>}
    </div>
  );
}

export default HoverToad;

  