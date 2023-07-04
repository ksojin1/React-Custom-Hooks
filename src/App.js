import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './componets/Home';
import MyFF from './componets/MyFF';
import Plan from './componets/Plan';
import Portfolio from './componets/Portfolio';

import Hook_test from './hooks/hook_test';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/myff" element={<MyFF/>}/> */}
        {/* <Route path="/plan" element={<Plan/>}/> */}
        {/* <Route path="/portfolio" element={<Portfolio/>}/> */}

        <Route path="/hook" element={<Hook_test />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
