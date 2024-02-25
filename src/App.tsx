import { Button, Space } from 'antd'
import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom'

const KEY_SAVE_NUMBER = 'KEY_SAVE_NUMBER';

function App() {
  const [count, setCount] = useState<number>(0)
  const [histroyList, setHistoryList] = useState<number[]>([]);
  const navigate = useNavigate();
  const handleSave = useCallback(() => {
    localStorage.setItem(KEY_SAVE_NUMBER, count.toString());
    histroyList.push(count);
    setHistoryList([...histroyList]);
  }, [count, histroyList]);
  const renderdRef = useRef(false);
  useEffect(() => {
    if (renderdRef.current) return;
    renderdRef.current = true;
    console.debug('useEffect...');
    const savedNumber = Number(localStorage.getItem(KEY_SAVE_NUMBER)) || 0;
    console.debug('saved number', savedNumber);
    setCount(savedNumber);
  }, []);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Space direction='vertical'>
          <Button type='primary' onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <Button type='primary' danger onClick={() => setCount(0)}>
            Reset
          </Button>
          <Button danger onClick={handleSave}>
            Save
          </Button>
        </Space>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <div>
          <Button onClick={() => navigate('/history')} type='link'>History</Button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
