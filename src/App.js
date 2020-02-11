import React from 'react';
import Chart from './components/Chart';

import BTC from './data/btc.json';
import ETH from './data/eth.json';
import LTC from './data/ltc.json';
import XRP from './data/xrp.json';

function App() {
  const BTCAverageScore =
    BTC.map(item => item.score).reduce((a, b) => a + b, 0) / BTC.length;
  const ETHAverageScore =
    ETH.map(item => item.score).reduce((a, b) => a + b, 0) / ETH.length;
  const LTCAverageScore =
    LTC.map(item => item.score).reduce((a, b) => a + b, 0) / LTC.length;
  const XRPAverageScore =
    XRP.map(item => item.score).reduce((a, b) => a + b, 0) / XRP.length;

  return (
    <div className='App'>
      <h1>CrytpoChart</h1>
      <Chart
        BTC={BTC}
        ETH={ETH}
        LTC={LTC}
        XRP={XRP}
        BTCScore={BTCAverageScore}
        ETHScore={ETHAverageScore}
        LTCScore={LTCAverageScore}
        XRPScore={XRPAverageScore}
      />
    </div>
  );
}

export default App;
