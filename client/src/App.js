import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Test from './pages/Test'
import { AnimatePresence } from 'framer-motion';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {


  return (
    <ApolloProvider client={client}>
      <AnimatePresence >
      <Router >
        <div className='bg-[#eee8c5] w-max h-max'>
          <Routes >
            <Route
              path="/"
              element={<Landing/>}
              />
              <Route 
                path="/Home"
                element={<Home/>}
                />
                <Route 
                path="/Test"
                element={<Test/>}
                />
          </Routes>
        </div>
      </Router>
      </AnimatePresence>
    </ApolloProvider>

    
  );
}

export default App;
