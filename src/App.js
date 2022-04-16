import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TokenContext from './context/token';
import useToken from './hooks/use-token';
import Dashboard from './pages/Dashboard';
import * as ROUTES from './constants/routes';

function App() {
  const { token } = useToken();

  return (
    <TokenContext.Provider value={token}>
      <Router>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.TRACKS} element={<Dashboard />} />
        </Routes>
      </Router>
    </TokenContext.Provider>
  );
}

export default App;
