import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import createHistory from 'history/createBrowserHistory';
import Home from '../components/Home';
import SimpleFormPage from '../components/example1/SimpleFormPage';
import MultipleFormPage from '../components/example2/MultipleFormPage';
import ExampleFormPage from '../components/example3/ExampleForm3Page';
import MyFormPage from '../components/example4/MyFormPage';
import BdayFormPage from '../components/example5/BdayFormPage';
import CheckboxDemoPage from '../components/example6/CheckboxDemoPage';
import Example7Page from '../components/example7/Example7Page';
import { TestPage } from '../components/example8/TestPage';
import { ContactFormPage } from '../components/example9/ContactFormPage';
import { DayPickerComponent } from '../components/example10/DayPickerComponent';
import { MyDatePickerForm } from '../components/example10/MyDatePickerForm';
import { AddBookMutationForm } from '../components/example11/AddBookForm';
import { EditBookPage } from '../components/example11/EditBookPage';
import { AddBookForm } from '../components/example12/AddBookForm';



export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/example1" component={SimpleFormPage} />
          <Route path="/example2" component={MultipleFormPage} />
          <Route path="/example3" component={ExampleFormPage} />
          <Route path="/example4" component={MyFormPage} />
          <Route path="/example5" component={BdayFormPage} />
          <Route path="/example6" component={CheckboxDemoPage} />
          <Route path="/example7" component={Example7Page} />
          <Route path="/example8" component={TestPage} />
          <Route path="/example9" component={ContactFormPage} />
          <Route path="/example10" component={DayPickerComponent} />
          <Route path="/example11" component={AddBookMutationForm} />
          <Route path="/:id" component={EditBookPage} />
          <Route path="/example12" component={AddBookForm} />
          <Route path="/test" component={MyDatePickerForm} />
        </Switch>
      </div>
    </Router>
);
export default AppRouter;



