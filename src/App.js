import React from 'react';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import Favorites from './containers/Favorites/Favorites';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
      <HashRouter basename='/Dima-Maximovski-17-09-2020'>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/favorites" component={Favorites} />
        </Switch>
        </HashRouter>
      </Layout>

    </div>
  );
}

export default App;
