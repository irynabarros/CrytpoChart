import React, { useState, useEffect } from 'react';
import {
  ReferenceLine,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import Selector from './Selector';

function Chart(props) {
  const [currency, setCurrency] = useState('ETH');
  const [data, setData] = useState(props.ETH);
  const [name, setName] = useState('Ethereum');
  const [avScore, setAvScore] = useState(props.ETHScore);
  const handleChange = e => {
    setCurrency(e.target.value);
  };
  const toggleChart = () => {
    if (currency === 'LTC') {
      setData(props.LTC);
      setAvScore(props.LTCScore);
      setName('Litecoin');
    } else if (currency === 'XRP') {
      setData(props.XRP);
      setAvScore(props.XRPScore);
      setName('XRP');
    } else if (currency === 'ETH') {
      setData(props.ETH);
      setAvScore(props.ETHScore);
      setName('Ethereum');
    }
  };
  useEffect(() => {
    toggleChart();
    
  }, [currency]);
  
  return (
    <div className='chart'>
      <ResponsiveContainer height='80%' width='100%'>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}>
          <CartesianGrid />
          <XAxis type='number' dataKey='score' name='Score' />
          <YAxis
            yAxisId='left'
            type='number'
            dataKey='price'
            name='Price'
            unit='USD'
            stroke='#154dff'
          />
          <YAxis
            yAxisId='right'
            orientation='right'
            type='number'
            dataKey='price'
            name='Price'
            unit='USD'
            stroke='#006a47'
          />
          <ZAxis type='number' dataKey='ratio' name='Ratio' range={[64, 344]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />

          <Legend />
          <Scatter
            yAxisId='left'
            name='Bitcoin'
            data={props.BTC}
            fill='#4892ff'
            stroke='#154dff'
          />

          <Scatter
            yAxisId='right'
            name={name}
            data={data}
            fill='#00B67A'
            stroke='#006a47'
          />
           {/* <ReferenceLine x={props.BTCScore}  stroke="#154dff" />        */}
          {/* <ReferenceLine x={avScore}  stroke="#006a47"  />       */}

          {/* Bug: app brakes when attempting to use 'ReferenceLine' */}
        </ScatterChart>
      </ResponsiveContainer>
      <Selector onChange={handleChange} />
    </div>
  );
}

export default Chart;
