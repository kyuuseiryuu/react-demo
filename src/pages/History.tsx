import { useState } from "react";
import CountHistory from "../components/CountHistory";

const HistoryPage = () => {
  const [history] = useState<number[]>([]);
  return (
    <>
      <h1>History Page</h1>
      <CountHistory history={history} />
    </>
  );
}

export default HistoryPage;