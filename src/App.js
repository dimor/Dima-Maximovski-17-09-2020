import React from 'react';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import Favorites from './containers/Favorites/Favorites';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
      <BrowserRouter basename='/process.env.PUBLIC_URL'>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/favorites" component={Favorites} />
        </Switch>
        </BrowserRouter>
      </Layout>

    </div>
  );
}

export default App;
