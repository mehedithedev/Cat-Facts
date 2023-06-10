import React from 'react';
import Facts from './Component/facts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const client = new QueryClient({defaultOptions:{
    // queriy= Read in CRUD (R)
    // mutations= Create Update Delete in CRUD (CUD)
    queries:{
      refetchOnWindowFocus:false,
    }
  }});
  return (
    <div>
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path='/facts' element={<Facts/>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;