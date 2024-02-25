import React from 'react';

interface CountHistoryProps {
  history: number[];
}

const CountHistory: React.FC<CountHistoryProps> = (props) => {
  const { history: histroyList } = props;
  return (
    <>
      <h3>Count History</h3>
      <ul>
        {histroyList.map((e, i) => {
          return (<li key={i}>{e}</li>)
        })}
      </ul>
    </>
  );
}

export default CountHistory;