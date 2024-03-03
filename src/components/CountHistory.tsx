import React from 'react';
import { useStore } from '../stores/stores';

interface CountHistoryProps {
  history: number[];
}

const CountHistory: React.FC<CountHistoryProps> = (props) => {
  const { history: histroyList } = props;
  const count = useStore(state => state.bears);
  return (
    <>
      <h3>Count History</h3>
      <h3>Current Count {count}</h3>
      <ul>
        {histroyList.map((e, i) => {
          return (<li key={i}>{e}</li>)
        })}
      </ul>
    </>
  );
}

export default CountHistory;