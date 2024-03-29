import React, { useState } from 'react';
import './Joaat.css';

function JOAATCalculator() {
  const [input, setInput] = useState('');
  const [uint32Result, setUint32Result] = useState(0);
  const [int32Result, setInt32Result] = useState(0);
  const [hexResult, setHexResult] = useState('');
  const [showKarby, setShowKarby] = useState(false);

  const calculateJOAAT = (str) => {
    str = str.toLowerCase();
    let h, i;

    for (h = i = 0; i < str.length; i++) {
      h += str.charCodeAt(i);
      h += (h << 10);
      h ^= (h >>> 6);
    }

    h += (h << 3);
    h ^= (h >>> 11);
    h += (h << 15);

    setUint32Result(h >>> 0);
    setInt32Result(h | 0);
    setHexResult((h >>> 0).toString(16).toUpperCase())

    if (str.toLowerCase() === 'karby') {
      setShowKarby(true);
    } else {
      setShowKarby(false);
    }
  };

  const handleInputChange = (e) => {
    const str = e.target.value.trim();
    setInput(str);
    calculateJOAAT(str);
  };

  return (
    <div className="joaat">
      <div className="calculator">
        <input id="input" type="text" value={input} onChange={handleInputChange} placeholder='Name' />
        <div className="results">
          <div className="item">
            <span>uint32</span>
            {input ? uint32Result : "-"}
          </div>
          <div className="item">
            <span>int32</span>
            {input ? int32Result : "-"}
          </div>
          <div className="item">
            <span>hex</span>
            {input ? "0x" + hexResult : "-"}
          </div>
        </div>
      </div>
      {showKarby && (
        <div className="karby">
          <p>Karby. Karby. Karby. Karby. Karby. Karby. Karby. Karby. Karby.</p>
          <img src={require('@site/static/img/karby.png').default}></img>
          <p>Join our <a href="https://discord.altv.mp" target='blank'>Discord Server</a> for daily Karbys!</p>
        </div>
      )}
    </div>
  );
}

export default JOAATCalculator;
