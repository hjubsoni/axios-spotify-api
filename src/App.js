import React from 'react';
import TokenContext from './context/token';
import useToken from './hooks/use-token';
import GetArtis from './components/GetArtist';
import SearchForItem from './components/SearchForItem';

function App() {
  const { token } = useToken();

  return (
    <TokenContext.Provider value={token}>
      <GetArtis />
      <SearchForItem />
    </TokenContext.Provider>
  );
}

export default App;
