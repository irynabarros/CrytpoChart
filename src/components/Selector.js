import React from 'react';

function Selector(props) {
  return (
    <select onChange={props.onChange} className='selector'>
      <option value='ETH'>Ethereum</option>
      <option value='LTC'>Litecoin</option>
      <option value='XRP'>XRP</option>
    </select>
  );
}

export default Selector;
