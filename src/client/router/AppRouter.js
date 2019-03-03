import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import createHistory from 'history/createBrowserHistory';
import Home from '../components/Home';
import SimpleFormPage from '../components/redux-form-demo/SimpleFormPage';
import MultipleFormPage from '../components/example2/MultipleFormPage';
import ExampleFormPage from '../components/example3/ExampleForm3Page';



export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/demo" component={SimpleFormPage} />
          <Route path="/multi" component={MultipleFormPage} />
          <Route path="/example3" component={ExampleFormPage} />
        </Switch>
      </div>
    </Router>
);
export default AppRouter;




