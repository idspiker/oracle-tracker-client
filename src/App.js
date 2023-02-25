import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Join from './pages/Join';
import Start from './pages/Start';
import End from './pages/End';
import SessionMain from './pages/SessionMain';
import Oracles from './pages/Oracles';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/join' element={<Join />} />
          <Route path='/start' element={<Start />} />
          <Route path='/end' element={<End />} />
          <Route path='/session' element={<SessionMain />} />
          <Route path='/session/oracles' element={<Oracles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
