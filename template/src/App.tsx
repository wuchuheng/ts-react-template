import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useSetCountThunk } from './store/slices/counterSlice';
import { useAppSelector } from './store';

function App() {
  const setCount = useSetCountThunk();

  const count = useAppSelector((state) => state.counter.value);

  return (
    <>
      <div className="flex space-x-4 items-center justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl">Vite + React</h1>
      <div className="card">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
