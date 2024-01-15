import { Route, BrowserRouter, Routes } from "react-router-dom";
import ReactHookTest from './hooks/ReactHookTest';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<ReactHookTest />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
