import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Login from '~views/Login';
import Home from '~views/Home';
import routes from '~src/routes';
import appStyles from './App.scss';
import './App.scss';

function App() {
  return (
    <div className={appStyles.App}>
      <Switch>
        <Route path={routes.login} component={Login} />
        <Route path={routes.home} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
